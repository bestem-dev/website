import { useNotificationSound } from "@/hooks/notification";
import { Transition, Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import type { FC } from "react";
import { Fragment } from "react";
import { useCallback, useEffect, useReducer, useState } from "react";
import { chatSocket } from "@/socket";
import TextareaAutosize from "react-textarea-autosize";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface Message {
  message: string;
  isBot: boolean;
  attachment?: Attachment;
}

interface Attachment {
  type: string;
  payload: {
    src: string;
  };
}

interface ChatServer {
  name: string;
  description: string;
  imageUrl: string;
  service?: string;
}
const chatServers: ChatServer[] = [
  {
    name: "BestemBot",
    description:
      "Bot made using ChatGPT and Langchain, slower and might hallucinate. But much more flexible",
    imageUrl: "/images/bestemlogo.png",
    service: "bestembot",
  },
  {
    name: "RasaBot",
    description:
      "Simple bot made with Rasa, a conversational AI framework. Behaves well but is not very smart.",
    imageUrl: "/images/chat/rasa.jpeg",
    service: "rasa01",
  },
];

interface useChatServerArgs {
  onIncomingMessage: () => void;
  server: ChatServer;
}
type MessageDispatch = { action: "add" | "clear"; message?: Message };

const useChatServer = ({ onIncomingMessage, server }: useChatServerArgs) => {
  // Message state management
  const [messages, messageDispatch] = useReducer(
    (messages: ChatMessageProps[], { action, message }: MessageDispatch) => {
      if (action === "add") {
        if (!message) throw new Error("Message is undefined");
        let isChain;
        const lastMessage = messages[messages.length - 1];
        if (lastMessage) {
          isChain = message.isBot == lastMessage.isBot;
        }
        console.log(message);
        return [
          ...messages,
          {
            ...message,
            isChain: isChain,
          },
        ];
      }
      if (action === "clear") {
        return [];
      } else {
        return messages;
      }
    },
    []
  );

  // Callbacks
  const addMessage = useCallback(
    (message: Message) => {
      messageDispatch({ action: "add", message: message });
      if (message.isBot) {
        onIncomingMessage();
      } else {
        console.log("Sending message to server");
        chatSocket.emit("user_msg", {
          ...message,
          service: server.service,
        });
      }
    },
    [messageDispatch, onIncomingMessage, server.service]
  );

  const sendMessage = useCallback(
    (message: string) => {
      if (!message) return;
      addMessage({ message: message, isBot: false });
    },
    [addMessage]
  );

  // Socket management
  const [isConnected, setIsConnected] = useState(chatSocket.connected);
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
    function onConnect() {
      console.log("Connected to Rasa socket");
      setIsConnected(true);
    }

    function onDisconnect() {
      console.log("Disconnected from Rasa socket");
      setIsConnected(false);
    }

    function onBotMsg(value: { text?: string; attachment?: Attachment }) {
      console.log(value);
      addMessage({
        message: value.text || "",
        attachment: value.attachment,
        isBot: true,
      });
    }

    function onTyping(value: boolean) {
      setIsTyping(value);
    }

    chatSocket.on("connect", onConnect);
    chatSocket.on("disconnect", onDisconnect);
    chatSocket.on("bot_msg", onBotMsg);
    chatSocket.on("bot_typing", onTyping);

    return () => {
      chatSocket.off("connect", onConnect);
      chatSocket.off("disconnect", onDisconnect);
      chatSocket.off("bot_msg", onBotMsg);
      chatSocket.off("bot_typing", onTyping);
    };
  }, [addMessage, onIncomingMessage]);

  // Clearing messages on service change
  useEffect(() => {
    console.log("Switching service");
    messageDispatch({ action: "clear" });
    chatSocket.emit("user_greet", { service: server.service });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [server]);

  return {
    isConnected,
    isTyping,
    sendMessage,
    messages,
  };
};

export const ChatWindow = () => {
  const playSound = useNotificationSound();

  const [selectedServer, setSelectedServer] = useState<ChatServer>(
    chatServers[0]!
  );
  const { isConnected, isTyping, sendMessage, messages } = useChatServer({
    onIncomingMessage: () => {
      playSound();
    },
    server: selectedServer,
  });

  const [currentMessage, setCurrentMessage] = useState("");

  const handleMessage = useCallback(() => {
    if (!currentMessage) return;
    sendMessage(currentMessage);
    setCurrentMessage("");
  }, [currentMessage, sendMessage]);

  const onMsgShow = useCallback(() => {
    const objDiv = document.getElementById("chat-bottom");
    if (objDiv) {
      setTimeout(() => {
        objDiv.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);
  useEffect(() => {
    function onEvent(event: KeyboardEvent) {
      if (event.key === "Enter" && !event.shiftKey) {
        handleMessage();
        event.preventDefault();
      }
    }
    document.addEventListener("keypress", onEvent);
    return () => {
      document.removeEventListener("keypress", onEvent);
    };
  }, [handleMessage]);

  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div className="flex w-full items-center justify-between bg-neutral-700 px-4 shadow-md">
        <div className="z-10 flex h-16 items-center justify-start">
          <Image
            className="h-10 w-10 rounded-full object-cover shadow-sm"
            src={selectedServer.imageUrl}
            alt="Bot Logo"
            width={80}
            height={80}
          />
          <div className="flex h-10 flex-col justify-center px-4 leading-tight transition-all duration-1000">
            <h1 className="text-xl leading-none">{selectedServer.name}</h1>
            <Transition
              appear={true}
              show={isTyping}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {/* Your content goes here*/}
              <span className="text-sm  leading-none text-neutral-300">
                Typing...
              </span>
            </Transition>
          </div>
        </div>
        <ServerSelector value={selectedServer} onChange={setSelectedServer} />
      </div>
      <div
        id="messageBoard"
        className="h-full overflow-x-hidden overflow-y-scroll bg-neutral-800 pb-4"
      >
        {messages.map((message, index) => (
          <ChatMessage key={index} {...message} onShow={onMsgShow} />
        ))}
        <span id="chat-bottom"></span>
      </div>
      <div className="min-h-12 flex justify-between rounded-b-lg bg-neutral-500 align-middle">
        <div className="flex h-full w-full items-center justify-center bg-neutral-700">
          <TextareaAutosize
            maxRows={4}
            contentEditable={true}
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            className="w-full resize-none bg-transparent px-4 py-2 outline-none"
          />
        </div>
        <button
          onClick={handleMessage}
          disabled={isConnected && !currentMessage}
          className={
            "bg-secondary px-8 py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary" +
            (currentMessage ? "" : " text-neutral-500")
          }
        >
          Send
        </button>
      </div>
    </div>
  );
};

interface ServerSelectorProps {
  value: ChatServer;
  onChange: (server: ChatServer) => void;
}
const ServerSelector: FC<ServerSelectorProps> = ({ value, onChange }) => {
  return (
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-neutral-700 py-1.5 pl-3 pr-10 text-left text-white shadow-sm ring-1 ring-inset ring-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-2 block truncate">{value.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute right-[0px] z-10 mt-1 max-h-56 w-72 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {chatServers.map((server, id) => (
                  <Listbox.Option
                    key={id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-secondary text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={server}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <Image
                            src={server.imageUrl}
                            alt=""
                            width={64}
                            height={64}
                            className="h-8 w-8 flex-shrink-0 rounded-full object-cover"
                          />
                          <div className="ml-3 flex flex-col ">
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {server.name}
                            </span>
                            {server.description && (
                              <span className="text-xs font-thin">
                                {server.description}
                              </span>
                            )}
                          </div>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  attachment?: Attachment;
  isChain?: boolean;
  onShow?: () => void;
}
const ChatMessage: FC<ChatMessageProps> = ({
  message,
  isBot,
  attachment,
  isChain,
  onShow,
}) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setIsShowing(true);
      if (onShow) {
        const timeout = setTimeout(() => {
          onShow();
        }, 10); // wait for render
        return () => {
          clearTimeout(timeout);
        };
      }
    }, 0);
    return () => {
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      className={
        "flex w-full px-4 pt-4" +
        " " +
        (isBot ? "justify-start" : "justify-end") +
        " " +
        (isChain ? "pt-[0.25rem]" : "")
      }
    >
      <Transition
        show={isShowing}
        enter="transition ease-in-out duration-300 transform"
        enterFrom={isBot ? "-translate-x-full" : "translate-x-full"}
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo={isBot ? "-translate-x-full" : "translate-x-full"}
        className="max-w-[90%] md:max-w-[80%]"
      >
        <div
          className={
            "rounded-b-xl bg-neutral-600 px-1 pb-1 pt-1" +
            " " +
            (isBot ? "rounded-tr-xl" : "rounded-tl-xl") +
            " " +
            (isChain ? "rounded-xl pt-2" : "")
          }
        >
          {!isChain && (
            <span className="px-2 text-xs font-thin text-neutral-300">
              {isBot ? "BestemBot" : "You"}
            </span>
          )}
          {message && (
            <p className="whitespace-pre-wrap break-words px-3 pb-1">
              {message}
            </p>
          )}
          {attachment && attachment.type === "image" && (
            <Image
              src={attachment.payload.src}
              alt="Attached Image"
              width={300}
              height={300}
              className="rounded-[8px]"
            />
          )}
        </div>
      </Transition>
    </div>
  );
};

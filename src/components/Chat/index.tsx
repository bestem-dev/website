import { Transition } from "@headlessui/react";
import Image from "next/image";
import type { FC } from "react";
import { useCallback, useEffect, useReducer, useState } from "react";

interface Message {
  message: string;
  isBot: boolean;
}

export const ChatWindow = () => {
  const playSound = useCallback(() => {
    const notificationSound = new Audio("/sound/msg.wav");
    console.log("Sound played");
    notificationSound.play().catch((err) => console.log(err));
  }, []);
  const [messages, addMessage] = useReducer(
    (messages: ChatMessageProps[], message: Message) => {
      let isChain;
      const lastMessage = messages[messages.length - 1];
      if (lastMessage) {
        isChain = message.isBot == lastMessage.isBot;
      }
      return [
        ...messages,
        {
          message: message.message,
          isBot: message.isBot,
          isChain: isChain,
        },
      ];
    },
    []
  );
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = useCallback(() => {
    if (!currentMessage) return;
    addMessage({ message: currentMessage, isBot: false });
    setCurrentMessage("");

    // For testing purposes
    setTimeout(() => {
      addMessage({
        message: "I'm sorry, I don't understand",
        isBot: true,
      });
      playSound();
    }, 1000);
  }, [currentMessage, playSound]);

  const onMsgShow = useCallback(() => {
    const objDiv = document.getElementById("chat-bottom");
    if (objDiv) {
      objDiv.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => {
      addMessage({
        message: "Hello! I'm BestemBot",
        isBot: true,
      });
    }, 0);
    const t2 = setTimeout(() => {
      addMessage({
        message: "What can I help you with today?",
        isBot: true,
      });
    }, 1000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);
  useEffect(() => {
    function onEvent(event: KeyboardEvent) {
      if (event.key === "Enter" && !event.shiftKey) {
        sendMessage();
      }
    }
    document.addEventListener("keypress", onEvent);
    return () => {
      document.removeEventListener("keypress", onEvent);
    };
  }, [sendMessage]);
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <div className="z-10 flex h-16 items-center justify-start bg-neutral-700 px-4 shadow-md">
        <Image
          className="rounded-full"
          src="/images/bestemlogo.png"
          alt="Bestem Logo"
          width={42}
          height={42}
        />
        <h1 className="px-4 text-xl">BestemBot</h1>
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
      <div className="flex h-12 justify-between rounded-b-lg bg-neutral-500 align-middle">
        <input
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          className="w-full bg-neutral-700 px-4 outline-none"
        ></input>
        <button
          onClick={sendMessage}
          disabled={!currentMessage}
          className={
            "bg-secondary px-8 py-2 transition-colors duration-200" +
            (currentMessage ? "" : " text-neutral-500")
          }
        >
          Send
        </button>
      </div>
    </div>
  );
};

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  isChain?: boolean;
  onShow?: () => void;
}

const ChatMessage: FC<ChatMessageProps> = ({
  message,
  isBot,
  isChain,
  onShow,
}) => {
  console.log("Rendering message", message);
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
            "rounded-b-xl bg-neutral-600 px-4 pb-2" +
            " " +
            (isBot ? "rounded-tr-xl" : "rounded-tl-xl") +
            " " +
            (isChain ? "rounded-xl pt-2" : "")
          }
        >
          {!isChain && (
            <span className="text-xs font-thin text-neutral-300">
              {isBot ? "BestemBot" : "You"}
            </span>
          )}
          <p>{message}</p>
        </div>
      </Transition>
    </div>
  );
};

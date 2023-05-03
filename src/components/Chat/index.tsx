import Image from "next/image";
import { FC, useCallback, useEffect, useReducer, useState } from "react";

interface Message {
  message: string;
  isBot: boolean;
}

export const ChatWindow = () => {
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
    [
      {
        message: "Hello! I'm BestemBot",
        isBot: true,
      },
      {
        message: "What can I help you with today?",
        isBot: true,
        isChain: true,
      },
    ]
  );
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = useCallback(() => {
    if (!currentMessage) return;
    addMessage({ message: currentMessage, isBot: false });
    setCurrentMessage("");
  }, [currentMessage]);

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
      <div className="flex h-16 items-center justify-start bg-neutral-700 px-4">
        <Image
          className="rounded-full"
          src="/images/bestemlogo.png"
          alt="Bestem Logo"
          width={42}
          height={42}
        />
        <h1 className="px-4 text-xl">BestemBot</h1>
      </div>
      <div className="h-full overflow-y-scroll bg-neutral-800 pb-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
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
            "bg-secondary px-8 py-2" +
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
}

const ChatMessage: FC<ChatMessageProps> = ({ message, isBot, isChain }) => {
  return (
    <div
      className={
        "flex w-full rounded-t-lg px-4 pt-4" +
        " " +
        (isBot ? "justify-start" : "justify-end") +
        " " +
        (isChain ? "pt-[0.25rem]" : "")
      }
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
    </div>
  );
};

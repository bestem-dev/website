import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const CHAT_URL =
  process.env.NODE_ENV === "production"
    ? process.env.RASA_WS
    : // : "http://localhost:5005";
      "http://localhost:5042";

if (CHAT_URL === undefined) {
  throw new Error("CHAT_WS environment variable is not set");
}

export const chatSocket = io(CHAT_URL, { transports: ["websocket"] });

import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const RASA_URL =
  process.env.NODE_ENV === "production"
    ? process.env.RASA_WS
    : "http://localhost:5005";

if (RASA_URL === undefined) {
  throw new Error("CHAT_WS environment variable is not set");
}

export const rasaSocket = io(RASA_URL);

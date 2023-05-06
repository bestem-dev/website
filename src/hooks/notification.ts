import { useCallback } from "react";

export const useNotificationSound = () => {
  return useCallback(() => {
    const notificationSound = new Audio("/sound/msg.wav");
    notificationSound.play().catch((err) => console.log(err));
  }, []);
};

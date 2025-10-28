import { useEffect } from "react";
export function useSetupSocket(socket) {
  useEffect(() => {
    socket.connect();
    return () => socket.disconnect();
  }, []);
}

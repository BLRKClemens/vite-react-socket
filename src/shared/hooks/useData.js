import { useState, useEffect } from "react";

export function useData(socket) {
  const [data, setData] = useState({});

  useEffect(() => {
    socket.on("updateData", (newData) => {
      setData(newData);
    });

    return () => socket.off("updateData");
  }, []);

  return data;
}

import { useEffect, useState } from "react";
import { socket } from "./shared/socket";
import { useSetupSocket } from "./shared/hooks/useSetupSocket";
function App() {
  const [state, setState] = useState({});

  useSetupSocket(socket);
  useEffect(() => {
    socket.on("updateState", (newState) => {
      setState(newState);
    });

    return () => socket.off("updateState");
  }, []);

  return <div></div>;
}

export default App;

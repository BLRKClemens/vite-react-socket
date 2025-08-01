import { useSetupSocket } from "../shared/hooks/useSetupSocket";
import { socket } from "../shared/socket";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState({});
  useSetupSocket(socket);
  useEffect(() => {
    socket.on("updateState", (newState) => {
      console.log(newState);
      setState(newState);
    });
    return () => socket.off("updateState");
  }, []);

  return <div></div>;
}

export default App;

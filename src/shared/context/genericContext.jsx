import { createContext } from "react";
import { useData } from "../hooks/useData";
// create the context
export const GenericContext = createContext(null);

// provider that receives socket as a prop
export const GenericContextProvider = ({ socket, children }) => {
  const data = useData(socket);
  return (
    <GenericContext.Provider value={{ data }}>
      {children}
    </GenericContext.Provider>
  );
};

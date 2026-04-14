/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";
//initialize context
const MessageContext = createContext();

//provider whith children who inherits value
export const MessageProvider = ({ children }) => {
  const message = "hei fra context";
  const greeting = "halla, håper du har en fin dag";

  //providerobject for ease of adding new values

  const providerObj = { message, greeting };

  const providerArray = ["test", "test2"];

  return (
    <MessageContext.Provider value={{ message, greeting }}>
      {children}
    </MessageContext.Provider>
  );
};

//hook for reducing imports.
export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("må være inne i en provider");
  }
  return context;
};

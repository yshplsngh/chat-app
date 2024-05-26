import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [soket, setsoket] = useState(null);
  const [onlineuser, setonlineuser] = useState([]);
  const { Authuser } = useAuthContext();

  useEffect(() => {
    if (Authuser) {
      const soket = io("http://localhost:4600", {
        query: {
          userId: Authuser._id,
        },
      });
      setsoket(soket);

      soket.on("getonlineuser", (users) => {
        setonlineuser(users);
      });
      return () => soket.close();
    } else {
      if (soket) {
        soket.close();
      }
      setsoket(null);
    }
  }, [Authuser]);

  return (
    <SocketContext.Provider value={{ soket, onlineuser }}>
      {children}
    </SocketContext.Provider>
  );
};

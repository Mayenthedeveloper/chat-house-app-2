import { useEffect } from "react";
import socketIOClient from "socket.io-client";

function useSocket(user, dispatch) {
  useEffect(() => {
    const socket = socketIOClient.connect("http://localhost:8000");

    socket.emit("join", user);
    socket.on("typing", (user) => {
      console.log("Events", user);
    });
  }, [dispatch]);
}

export default useSocket;

import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Chat = () => {
  const user = useSelector((state) => state.authReducer.user);

  return (
    <div>
      <h1>Chat Screen</h1>
      <p>Wecome, {user.firstName}</p>
    </div>
  );
};

export default Chat;

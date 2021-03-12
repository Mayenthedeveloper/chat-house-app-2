import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { fetchChats } from "../../store/actions/chat";
import FriendList from "../FriendList/FriendList";
import Messenger from "../Messenger/Messenger";
import useSocket from "./hooks/socketConnect";
import "./Chat.scss";

const Chat = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);

  useSocket(user, dispatch);

  //   useEffect(() => {
  //     dispatch(fetchChats())
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //   }, [dispatch]);

  return (
    <div id="chat-container">
      <Navbar />
      <div id="chat-wrap">
        <FriendList />
        <Messenger />
      </div>
    </div>
  );
};

export default Chat;

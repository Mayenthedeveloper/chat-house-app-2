import React, { Fragment, useState } from "react";
import { userStatus } from "../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const ChatHeader = ({ chat }) => {
  const [showChatOptions, setShowChatOptions] = useState(false);
  const [showAddFriendModal, setShowAddFriendModal] = useState(false);
  const [showLeaveChatModal, setShowLeaveChatModal] = useState(false);
  const [showDeleteChatModal, setShowDeleteChatModal] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const leaveChat = () => {};

  const deleteChat = () => {};

  return (
    <Fragment>
      <div id="chatter">
        {chat.Users.map((user) => {
          return (
            <div className="chatter-info" key={user.id}>
              <h3>
                {user.firstName} {user.lastName}
              </h3>
              <div className="chatter-status">
                <span className={`online-status ${userStatus(user)}`}></span>
              </div>
            </div>
          );
        })}
      </div>
      <FontAwesomeIcon
        onClick={() => setShowChatOptions(!showChatOptions)}
        icon={["fas", "ellipsis-v"]}
        className="fa-icon"
      />
      {showChatOptions ? (
        <div id="settings">
          <div onClick={() => setShowAddFriendModal(true)}>
            <FontAwesomeIcon icon={["fas", "user-plus"]} className="fa-icon" />
            <p>Add user to chat</p>
          </div>

          {chat.type === "group" ? (
            <div onClick={() => leaveChat()}>
              <FontAwesomeIcon
                icon={["fas", "sign-out-alt"]}
                className="fa-icon"
              />
              <p>Leave chat</p>
            </div>
          ) : null}

          {chat.type === "dual" ? (
            <div onClick={() => deleteChat()}>
              <FontAwesomeIcon icon={["fas", "trash"]} className="fa-icon" />
              <p>Delete chat</p>
            </div>
          ) : null}
        </div>
      ) : null}
    </Fragment>
  );
};

export default ChatHeader;

import API from "./api";

const ChatService = {
  fetchChats: () => {
    return API.get("/chats")
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });
  },

  uploadImage: (data) => {
    const headers = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    };
    return API.post("/chats/upload-image", data, headers)
      .then(({ data }) => {
        return data.url;
      })
      .catch((err) => {
        throw err;
      });
  },
};

export default ChatService;

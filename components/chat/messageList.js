import { MessageItem } from "./messageItem.js";
class MessageList {
  $container = document.createElement("div");

  constructor() {}
  addMessage = (message) => {
    const item = new MessageItem (message.content, message.sender);
    this.$container.appendChild(item.$container);
  };
  clearMessage = () => {
      this.$container.innerHTML = "";
  };
}
export{MessageList};

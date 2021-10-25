import { MessageItem } from "./messageItem.js";
class MessageList {
  $container = document.createElement("div");

  constructor() {}
  addMessage = (message) => {
    const item = new MessageItem(
      message.content,
      message.displayName,
      message.avatar
    );
    this.$container.prepend(item.$container);
    this.$container.classList.add("container-message-list");
  };
  clearMessage = () => {
    this.$container.innerHTML = "";
  };
}
export { MessageList };

import { MessageItem } from "./messageItem.js";
class MessageList {
  $container = document.createElement("div");

  constructor() {}
  addMessage = (message,id) => {
    const item = new MessageItem(
      message.content,
      message.displayName,
      message.avatar,
      id,
      message.messageType
    );
    this.$container.prepend(item.$container);
    this.$container.classList.add("container-message-list");
  };
  clearMessage = () => {
    this.$container.innerHTML = "";
  };
  // deleteMessage = () => {
  //   const item = new MessageItem('');
  //   this.$container.prepend(item.$container);
  //   // this.$container.classList.add("container-message-list");
  // }
}
export { MessageList };

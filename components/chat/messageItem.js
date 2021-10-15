class MessageItem {
  $container = document.createElement("div");
  $txtContent = document.createElement("div");
  $txtSender = document.createElement("div");

  constructor(content, sender) {
    this.$txtContent.innerText = content;
    this.$txtSender.innerText = sender;

    this.$container.appendChild(this.$txtSender);
    this.$container.appendChild(this.$txtContent);
  }
}
export { MessageItem };

class UserList {
  activeConversation = null;
  $container = document.createElement("div");

  $form = document.createElement("form");
  $input = document.createElement("input");
  $btnAdd = document.createElement("button");
  $userList = document.createElement("ul");

  constructor() {
    this.$container.appendChild(this.$form);
    this.$container.appendChild(this.$userList);

    this.$form.appendChild(this.$input);
    this.$form.appendChild(this.$btnAdd);

    this.$input.type = "email";
    this.$input.placeholder = "Nhập Email ...";
    this.$btnAdd.innerHTML = "Thêm";
    this.$form.addEventListener("submit", this.handleSubmit);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const newUserList = this.activeConversation.users.concat(this.$input.value);
    db.collection("conversations").doc(this.activeConversation.id).update({
      users: newUserList,
    });
  };
  setActiveConversation = (conversation) => {
    this.activeConversation = conversation;
    this.$userList.innerHTML = "";
    conversation.users.forEach((user) => {
      const $li = document.createElement("li");
      $li.innerHTML = user;
      this.$userList.appendChild($li);
    });
  };
  handleConversationUpdate = (id, name, users) => {
    if (!this.activeConversation || this.activeConversation.id) {
      return;
    }
    this.$userList.innerHTML = "";
    users.forEach((user) => {
      const $li = document.createElement("li");
      $li.innerHTML = user;
      this.$userList.appendChild($li);
    });
  };
}
export { UserList };

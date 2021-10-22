class UserList {
  activeConversation = null;
  $container = document.createElement("div");

  $form = document.createElement("form");
  $input = document.createElement("input");
  $btnAdd = document.createElement("button");
  $userList = document.createElement("ul");
  $btnLeave = document.createElement("button");

  constructor() {
    this.$container.appendChild(this.$form);
    this.$container.appendChild(this.$userList);

    this.$form.appendChild(this.$input);
    this.$form.appendChild(this.$btnAdd);
    this.$container.appendChild(this.$btnLeave);

    this.$input.type = "email";
    this.$input.placeholder = "Nhập Email ...";
    this.$btnAdd.innerHTML = "Thêm";
    this.$btnLeave.innerHTML = "Rời đi";
    this.$btnLeave.addEventListener("click", this.handleLeave);
    this.$form.addEventListener("submit", this.handleSubmit);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const newUserList = this.activeConversation.users.concat(this.$input.value);
    db.collection("conversations").doc(this.activeConversation.id).update({
      users: newUserList,
    });
  };
  handleLeave = () => {
    this.activeConversation;
    let change = null;
    console.log(this.activeConversation);
    if (confirm("Bạn có chắc muốn rời khỏi đoạn hội thoại?")) {
      
      this.activeConversation.users.splice(0, 1);
      const newUserList = this.activeConversation.users;
      db.collection("conversations").doc(this.activeConversation.id).update({
        users: newUserList,
      });

      change += 1;
    } else {
      return;
    }
    if (change != 0) {
      
    }
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
  handleConversationUpdated = (id, name, users) => {
    if (!this.activeConversation || this.activeConversation.id != id) {
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

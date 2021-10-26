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
    this.$container.appendChild(this.$btnLeave);
    this.$container.appendChild(this.$userList);

    this.$form.appendChild(this.$input);
    this.$form.appendChild(this.$btnAdd);

    this.$input.type = "email";
    this.$input.placeholder = "Thêm thành viên";
    this.$btnLeave.innerHTML = "Rời nhóm";

    this.$form.classList.add("formUserList")
    this.$input.classList.add("inputemailtoGrp");
    this.$btnAdd.classList.add("btnAdd");
    this.$userList.classList.add("userList");
    this.$btnLeave.classList.add("btnLeave");
    this.$btnLeave.addEventListener("click", this.handleLeave);
    this.$form.addEventListener("submit", this.handleSubmit);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const newUserList = this.activeConversation.users.concat(this.$input.value);
    db.collection("conversations").doc(this.activeConversation.id).update({
      users: newUserList,
    });
    this.$input.innerHTML=""
    setTimeout(function(){
      window.location.reload(1);
   }, 1600);
  };

  handleLeave = () => {
    this.activeConversation;
    const user = firebase.auth().currentUser;
    // console.log(this.activeConversation); // ktra
    let userArray = this.activeConversation.users;
    let indexOfUser = userArray.indexOf(user.email);
    // console.log(user.email) // ktra
    if (confirm("Bạn có chắc muốn rời khỏi đoạn hội thoại?")) {
      this.activeConversation.users.splice(indexOfUser, 1);
      const newUserList = this.activeConversation.users;
      db.collection("conversations").doc(this.activeConversation.id).update({
        users: newUserList,
      });

      setTimeout(function(){
        window.location.reload(1);
     }, 1600);

    } else {
      return;
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

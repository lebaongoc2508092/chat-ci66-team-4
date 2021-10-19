class Composer {
  activeConversation = null;

  $container = document.createElement("div");
  $form = document.createElement("form");
  $input = document.createElement("input");
  $btnEmo = document.createElement("button");
  $btnSend = document.createElement("button");

  constructor() {
    this.$input.type = "text";
    this.$input.placeholder = "Type here..";

    this.$btnEmo.innerHTML = "👍";
    this.$btnEmo.type = "button";

    this.$btnSend.innerHTML = "🛩";
    this.$btnSend.style.fontSize = "24px";

    this.$container.appendChild(this.$form);

    this.$form.appendChild(this.$input);
    this.$form.appendChild(this.$btnEmo);
    this.$form.appendChild(this.$btnSend);

    this.$btnEmo.addEventListener("click", this.handleBtnEmoClick);

    //this.$btnSend.addEventListener("click", this.handleBtnSend);
    this.$form.addEventListener("submit", this.handleSubmit);
  }

  setActiveConversation = (conversation) => {
    this.activeConversation = conversation;
  };

  //vị trí chèn avatar vào đoạn chat :
  handleBtnEmoClick = () => {
    if (!firebase.auth().currentUser.email || !this.activeConversation.id) {
      return;
    }
    db.collection("messages").add({
      content: this.$btnEmo.innerHTML,
      sender: firebase.auth().currentUser.email,
      ConversationId: this.activeConversation.id,
      sentAt: firebase.firestore.FieldValue.serverTimestamp(), //add new
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      !this.$input.value ||
      !firebase.auth().currentUser.email ||
      !this.activeConversation.id
    ) {
      return;
    }
    db.collection("messages").add({
      content: this.$input.value,
      sender: firebase.auth().currentUser.email,
      ConversationId: this.activeConversation.id,
      sentAt: firebase.firestore.FieldValue.serverTimestamp(), //add new
    });
  };

  handleBtnSend = () => {
    if (
      !this.$input.value ||
      !firebase.auth().currentUser.email ||
      !this.activeConversation.id
    ) {
      return;
    }
    db.collection("messages").add({
      content: this.$input.value,
      sender: firebase.auth().currentUser.email,
      ConversationId: this.activeConversation.id,
      sentAt: firebase.firestore.FieldValue.serverTimestamp(), //add new
    });
  };
}

export { Composer };

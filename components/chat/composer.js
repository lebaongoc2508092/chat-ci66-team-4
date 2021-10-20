class Composer {
  activeConversation = null;

  $container = document.createElement("div");
  $form = document.createElement("form");
  $input = document.createElement("input");
  $btnEmo = document.createElement("button");
  $btnSend = document.createElement("button");
  $container_composer = document.createElement("div");

  constructor() {
    this.$input.type = "text";
    this.$input.placeholder = "Hãy vui vẻ khi nhắn tin nhé";

    this.$btnEmo.innerHTML = "👍";
    this.$btnEmo.type = "button";

    this.$btnSend.innerHTML = "🛩";
    
        this.$input.classList.add("input-chat");
        this.$btnEmo.classList.add("button-emo");
        this.$btnSend.classList.add("button-send");
        

    this.$container.appendChild(this.$form);

    this.$form.appendChild(this.$container_composer)
    this.$container_composer.classList.add("container-composer")

    this.$container_composer.appendChild(this.$input);
    this.$container_composer.appendChild(this.$btnEmo);
    this.$container_composer.appendChild(this.$btnSend);

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
    this.$input.value=""
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
    this.$input.value=""
  };
}

export { Composer };

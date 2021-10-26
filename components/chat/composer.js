class Composer {
  activeConversation = null;

  $container = document.createElement("div");
  $form = document.createElement("form");

  $container_composer = document.createElement("div");
  $input = document.createElement("input");
  $btnEmo = document.createElement("button");
  $btnSend = document.createElement("button");
  $label = document.createElement("label");
  $selectFile = document.createElement("input");

  constructor() {
    this.$selectFile.setAttribute("type", "file");


    this.$input.type = "text";
    this.$input.placeholder = "Hãy vui vẻ khi nhắn tin nhé !!!";

    this.$btnEmo.type = "button";


    this.$input.classList.add("input-chat");
    this.$btnEmo.classList.add("button-emo");
    this.$btnSend.classList.add("button-send");
    this.$container.classList.add("footer-container");

    this.$container.appendChild(this.$form);
    this.$container_composer.classList.add("container-composer");

    
    
    this.$form.appendChild(this.$container_composer);
    
    this.$container_composer.appendChild(this.$input);

    this.$container_composer.appendChild(this.$label);
    this.$label.appendChild(this.$selectFile);
    this.$label.classList.add("labelSelectFile");

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
      displayName:firebase.auth().currentUser.displayName,
      avatar:firebase.auth().currentUser.photoURL,
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
      displayName:firebase.auth().currentUser.displayName,
      avatar:firebase.auth().currentUser.photoURL,
      ConversationId: this.activeConversation.id,
      sentAt: firebase.firestore.FieldValue.serverTimestamp(), //add new
    });
    this.$input.value = "";
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
      displayName:firebase.auth().currentUser.displayName,
      avatar:firebase.auth().currentUser.photoURL,
      ConversationId: this.activeConversation.id,
      sentAt: firebase.firestore.FieldValue.serverTimestamp(), //add new
    });
    this.$input.value = "";
  };

 
}

export { Composer };

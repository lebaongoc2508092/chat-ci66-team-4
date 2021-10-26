import { MessageItem } from "./messageItem.js";
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
  $btnUploadFile = document.createElement("button");
  $messageList = new MessageItem();
  $i=document.createElement("i")

  constructor() {
    this.$selectFile.setAttribute("type", "file");

    this.$input.type = "text";

    this.$input.placeholder = "Hãy vui vẻ khi nhắn tin nhé !!!";

    this.$input.placeholder = "Hãy vui vẻ khi nhắn tin nhé";
    this.$label.innerHTML = "Chọn File";


    this.$btnEmo.type = "button";
    this.$btnEmo.innerHTML="👍"



    this.$i.setAttribute("class", "fas fa-paper-plane");
    this.$selectFile.setAttribute("id", "photo");
    this.$btnUploadFile.type = "button";
    this.$btnUploadFile.innerHTML = "Upload";


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
    this.$container_composer.appendChild(this.$btnUploadFile);
    this.$btnUploadFile.addEventListener("click", this.uploadImage);

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
      displayName: firebase.auth().currentUser.displayName,
      avatar: firebase.auth().currentUser.photoURL,
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
      displayName: firebase.auth().currentUser.displayName,
      avatar: firebase.auth().currentUser.photoURL,
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
      displayName: firebase.auth().currentUser.displayName,
      avatar: firebase.auth().currentUser.photoURL,
      ConversationId: this.activeConversation.id,
      sentAt: firebase.firestore.FieldValue.serverTimestamp(), //add new
    });
    this.$input.value = "";
  };

  uploadImage = () => {
    const ref = firebase.storage().ref();
    const file = document.getElementById("photo").files[0];
    const metadata = {
      contentType: file.type,
    };
    const name = file.name;
    const uploadIMG = ref.child(name).put(file, metadata);
    uploadIMG
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then((url) => {
        const photoUrl = url;
        console.log(photoUrl)
        const $img = document.createElement("img");
        $img.src = photoUrl;
      })
      .catch(console.error);
      this.$containerContent.appendChild(this.$img);
  };
}

export { Composer };

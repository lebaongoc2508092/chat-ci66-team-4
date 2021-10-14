import { Modal } from "../share/modal.js";
import { InputGroup } from "../share/inputGroup.js";

class CreateConversationForm {
  $container = document.createElement("div");
  $modal = new Modal();

  $form = document.createElement("form");
  $conversationNameInput = new InputGroup("Tạo đoạn hội thoại mới", "text", "Nhập tên đoạn hội thoại");

  constructor() {
    this.$container.appendChild(this.$modal.$container);
    this.$container.style.visibility = "hidden";

    this.$modal.setHeader("Tạo đoạn hội thoại mới");
    this.$modal.setBody(this.$form);
    this.$modal.setonConfirmClick(this.handleCreateConversation);
    this.$modal.setonCancelClick(() => {
      this.setVisible(false);
    });

    this.$form.appendChild(this.$conversationNameInput.$container);
  }

  handleCreateConversation = () => {
    const name = this.$conversationNameInput.getValue();
    db.collection("conversations").add({
      name: name,
      users: [firebase.auth().currentUser.email],
    });
  };

  setVisible = (visible) => {
    if (visible) {
      this.$container.style.visibility = "visible";
    } else {
      this.$container.style.visibility = "hidden";
    }
  };
}


export{CreateConversationForm}
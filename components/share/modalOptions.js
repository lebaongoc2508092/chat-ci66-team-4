
import { PreviewAva } from "./modalOptionAll/previewImgB4Upload.js";

class ModalOptions {
  $container = document.createElement("div");
  $modalOptionsContainer = document.createElement("div"); //background

  $header = document.createElement("div");
  $imgAva = new PreviewAva();

  $body = document.createElement("div");

  // $frameAva = document.createElement("div");
  $name = document.createElement("div")
  $email = document.createElement("div")

  $passwordChange = document.createElement("a");

  $footer = document.createElement("div");
  $btnCancel = document.createElement("button");
  $btnSave = document.createElement("button");

  constructor() {
    this.$container.classList.add("modalOptionsContainer")
    this.$modalOptionsContainer.classList.add("modalOptionsContainerBackground");

    this.$passwordChange.innerHTML = "Change Password";
    
    this.$btnCancel.innerHTML = "Cancel";
    this.$btnSave.innerHTML = "Save";
    
    this.$container.appendChild(this.$modalOptionsContainer);
    
    this.$modalOptionsContainer.appendChild(this.$header);
    this.$modalOptionsContainer.appendChild(this.$body);
    this.$modalOptionsContainer.appendChild(this.$footer);
    
    this.$header.appendChild(this.$imgAva.$container);
    // this.$frameAva.appendChild(this.$imgAva.$container);

    this.$body.appendChild(this.$name);
    this.$body.appendChild(this.$email);
    this.$body.appendChild(this.$passwordChange);
    this.$body.classList.add("bodyModalOptions");
    this.$passwordChange.classList.add("btnChangePassword");
    
    this.$footer.appendChild(this.$btnCancel);
    this.$footer.appendChild(this.$btnSave);
    this.$footer.classList.add("footerModalOptions")
    this.$btnCancel.classList.add("btnCancelModalOptions");
    this.$btnSave.classList.add("btnSaveModalOptions");
    this.handleRenderProfile()
  }
  
  handleRenderProfile = () => {
    const user = firebase.auth().currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
    
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
      this.$name.innerHTML="Tên: " + displayName;
      this.$email.innerHTML="Email: " + email;
    }

  };

  setonCancelClick = (listener) => {
    this.$btnCancel.onclick = listener;
    this.$btnSave.onclick = listener;
  };
}

export { ModalOptions };

import { ModalOptionsContent } from "./modalOptionAll/modalOptionContent.js";
import { PreviewAva } from "./modalOptionAll/previewImgB4Upload.js";

class ModalOptions {
  $container = document.createElement("div");
  $modalOptionsContainer = document.createElement("div"); //background

  $header = document.createElement("div");
  $imgAva = new PreviewAva();

  $body = document.createElement("div");

  $frameAva = document.createElement("div");
  $name = document.createElement("div")
  $email = document.createElement("div")
  $age = new ModalOptionsContent("Age", "", "");
  $birthdate = new ModalOptionsContent("Birthdate", "", "");
  $country = new ModalOptionsContent("Country", "", "");
  $phone = new ModalOptionsContent("Tel", "", "");

  $passwordChange = document.createElement("button");

  $footer = document.createElement("div");
  $btnCancel = document.createElement("button");
  $btnSave = document.createElement("button");

  constructor() {
    this.$container.classList.add("modalOptionsContainer")
    this.$modalOptionsContainer.classList.add("modalOptionsContainerBackground");
    this.$frameAva.classList.add("frameAva");
    this.$imgAva.$container.classList.add("imgAva")

    this.$passwordChange.innerHTML = "Change Password";
    
    this.$btnCancel.innerHTML = "Cancel";
    this.$btnSave.innerHTML = "Save";
    
    this.$container.appendChild(this.$modalOptionsContainer);
    
    this.$modalOptionsContainer.appendChild(this.$header);
    this.$modalOptionsContainer.appendChild(this.$body);
    this.$modalOptionsContainer.appendChild(this.$footer);
    
    this.$header.appendChild(this.$frameAva);
    this.$frameAva.appendChild(this.$imgAva.$container);

    this.$body.appendChild(this.$name);
    this.$body.appendChild(this.$email);
    this.$body.appendChild(this.$age.$container);
    this.$body.appendChild(this.$birthdate.$container);
    this.$body.appendChild(this.$country.$container);
    this.$body.appendChild(this.$phone.$container);
    this.$body.appendChild(this.$passwordChange);
    
    this.$footer.appendChild(this.$btnCancel);
    this.$footer.appendChild(this.$btnSave);
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
      this.$email.innerHTML=email;
      this.$name.innerHTML=displayName;
    }

  };

  setonCancelClick = (listener) => {
    this.$btnCancel.onclick = listener;
    this.$btnSave.onclick = listener;
  };
}

export { ModalOptions };

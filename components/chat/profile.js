import { ModalOptions } from "../share/modalOptions.js";

class Profile {
  $container = document.createElement("div");
  $headerProfile = document.createElement("div");

  
  $avatar = document.createElement("img");
  $displayName = document.createElement("div");
  $emailProfile = document.createElement("div");

  $options = new ModalOptions();
  $optionsClick = document.createElement("a");

  constructor() {
    this.setProfileAvatar();
    this.$optionsClick.innerHTML = "Option";

    this.$container.classList.add("container-profile");

    this.$options.$container.style.visibility = "hidden";
    this.$optionsClick.addEventListener("click", this.handleShowOptionProfile);


    this.$container.appendChild(this.$headerProfile)
    this.$headerProfile.appendChild(this.$avatar);
    this.$headerProfile.appendChild(this.$displayName);
    this.$headerProfile.appendChild(this.$optionsClick);
    this.$headerProfile.appendChild(this.$options.$container)
    
    

    this.$options.setonCancelClick(() => {
      this.setVisible(false);
    });

    this.$headerProfile.classList.add("headerProfile")
    this.$avatar.classList.add("avatar");
    this.$displayName.classList.add("displaynameProfile");
    this.$optionsClick.classList.add("btnOptionsClick");
    this.$options.$container.classList.add("options");

  }

  handleShowOptionProfile = () => {
    this.$options.$container.style.visibility = "visible";
  };


  setProfileAvatar = () => {
    const user = firebase.auth().currentUser;
    if (user !== null) {
      const displayName = user.displayName;
      // const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
      this.$avatar.src = photoURL;
      this.$displayName.innerHTML = displayName;
      // this.$emailProfile.innerHTML = "Email: " + email;
    }
  };

  setVisible = (visible) => {
    if (visible) {
      this.$options.$container.style.visibility = "visible";
    } else {
      this.$options.$container.style.visibility = "hidden";
    }
  };
}

export { Profile };

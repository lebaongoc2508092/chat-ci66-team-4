import { ModalOptions } from "../share/modalOptions.js";

class Profile {
  $container = document.createElement("div");
  $headerProfile = document.createElement("div");
  $bodyProfile = document.createElement("div");
  $footerProfile = document.createElement("div");
  
  $avatar = document.createElement("img");
  $displayName = document.createElement("div");
  $emailProfile = document.createElement("div");

  $options = new ModalOptions();
  $optionsClick = document.createElement("a");
  $btnLogout = document.createElement("a");

  constructor() {
    this.setProfileAvatar();
    this.$optionsClick.innerHTML = "Option";

    this.$container.classList.add("container-profile");

    this.$options.$container.style.visibility = "hidden";
    this.$optionsClick.addEventListener("click", this.handleShowOptionProfile);

    this.$btnLogout.type = "button";
    this.$btnLogout.innerHTML = "Logout!!!";

    this.$container.appendChild(this.$headerProfile)
    this.$headerProfile.appendChild(this.$avatar);
    this.$headerProfile.appendChild(this.$displayName);
    this.$headerProfile.appendChild(this.$optionsClick);
    
    this.$container.appendChild(this.$bodyProfile)
    this.$bodyProfile.appendChild(this.$emailProfile);
    
    this.$container.appendChild(this.$footerProfile)
    this.$footerProfile.appendChild(this.$btnLogout);
    this.$footerProfile.appendChild(this.$options.$container);
    
    this.$btnLogout.addEventListener("click", this.handleLogout);

    this.$options.setonCancelClick(() => {
      this.setVisible(false);
    });

    this.$headerProfile.classList.add("headerProfile")
    this.$avatar.classList.add("avatar");
    this.$displayName.classList.add("displaynameProfile");
    this.$optionsClick.classList.add("btnOptionsClick");
    this.$bodyProfile.classList.add("bodyProfile");
    this.$footerProfile.classList.add("footerProfile");
    this.$options.$container.classList.add("options");
    this.$btnLogout.classList.add("btnLogoutProfile");

  }

  handleShowOptionProfile = () => {
    this.$options.$container.style.visibility = "visible";
  };

  handleLogout = () => {
    firebase.auth().signOut();
  };

  setProfileAvatar = () => {
    const user = firebase.auth().currentUser;
    if (user !== null) {
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
      this.$avatar.src = photoURL;
      this.$displayName.innerHTML = displayName;
      this.$emailProfile.innerHTML = email;
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

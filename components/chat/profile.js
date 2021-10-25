import { ModalOptions } from "../share/modalOptions.js";

class Profile {
  $container = document.createElement("div");
  $headerProfile = document.createElement("div");
  $bodyProfile = document.createElement("div");
  $footerProfile = document.createElement("div");
  
  $avatar = document.createElement("img");
  $displayName = document.createElement("div");
  $birthdate = document.createElement("div");
  $country = document.createElement("div");
  $phoneNumber = document.createElement("div");

  $options = new ModalOptions();
  $optionsClick = document.createElement("a");
  $btnLogout = document.createElement("a");

  constructor() {
    this.setProfileAvatar();
    this.$optionsClick.innerHTML = "Option";

    this.$container.classList.add("container-profile");

    this.$options.$container.style.visibility = "hidden";
    // this.$options.$container.innerHTML = "Option";
    this.$optionsClick.addEventListener("click", this.handleShowOptionProfile);

    this.$btnLogout.type = "button";
    this.$btnLogout.innerHTML = "Logout!!!";

    this.$container.appendChild(this.$headerProfile)
    this.$headerProfile.appendChild(this.$avatar);
    this.$headerProfile.appendChild(this.$displayName);
    this.$headerProfile.appendChild(this.$optionsClick);
    
    this.$container.appendChild(this.$bodyProfile)
    this.$bodyProfile.appendChild(this.$birthdate);
    this.$bodyProfile.appendChild(this.$country);
    this.$bodyProfile.appendChild(this.$phoneNumber);
    
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
      const birthdate = user.birthdate;
      const country = user.country;
      const phoneNumber = user.phoneNumber;

      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      const uid = user.uid;
      this.$avatar.src = photoURL;
      this.$displayName.innerHTML = displayName;
      this.$birthdate.innerHTML = "Ngày sinh: " + birthdate;
      this.$country.innerHTML = "Quốc tịch: " + country;
      this.$phoneNumber.innerHTML = "SĐT: " + phoneNumber;
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

import {ModalOptions} from '../share/modalOptions.js';
class Profile{
    $container = document.createElement("div");

    $avatar = document.createElement("div");
    $displayName = document.createElement("div");
    $options = new ModalOptions();
    $btnLogout = document.createElement("button");

    constructor() {
        this.$displayName.innerHTML = "Name";
        // this.$options.$container.innerHTML = "Option"

        this.$btnLogout.type = "button"
        this.$btnLogout.innerHTML = "Logout"

        this.$container.appendChild(this.$avatar);
        this.$container.appendChild(this.$displayName);
        this.$container.appendChild(this.$options.$container);
        this.$container.appendChild(this.$btnLogout);
        
        this.$btnLogout.addEventListener("click", this.handleLogout)
        this.$avatar.classList.add("avatar");
        this.$displayName.classList.add("displayname");
        this.$options.$container.classList.add("options");
        this.$btnLogout.classList.add("btnGrpLogin");

    }

    handleLogout = () => {
        firebase.auth().signOut()
    }
    
    }

export {Profile};
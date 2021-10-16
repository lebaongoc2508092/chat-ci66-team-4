import { ModalOptionsContens } from "./modalOptionAll/modalOptionAll.js";

class ModalOptions {
  $container = document.createElement("div");
  $modalOptionsContainer = document.createElement("div");//background
  
  $header = document.createElement("div");
  $imgAva = document.createElement("img");
  
  $body = document.createElement("div");
  $name = new ModalOptionsContens("Name", "","Change Name");
  $email =  new ModalOptionsContens("Email", "","Change Email");
  $age =  new ModalOptionsContens("Age", "","Change Age");
  $birthdate =  new ModalOptionsContens("Birthdate", "","Change Birthdate");
  $country =  new ModalOptionsContens("Country", "","Change Country");
  $phone =  new ModalOptionsContens("Tel", "","Change Phone Number");

  $passwordChange = document.createElement("button");

  $footer = document.createElement("div");
  $btnCancel = document.createElement("button");
  $btnSave = document.createElement("button");

  constructor(){
    this.$passwordChange.innerHTML = "Change Password";

    this.$container.appendChild(this.$modalOptionsContainer);

    this.$modalOptionsContainer.appendChild(this.$header);
    this.$modalOptionsContainer.appendChild(this.$body);
    this.$modalOptionsContainer.appendChild(this.$footer);

    this.$header.appendChild(this.$imgAva);
    
    this.$body.appendChild(this.$name.$container);
    this.$body.appendChild(this.$email.$container);
    this.$body.appendChild(this.$age.$container);
    this.$body.appendChild(this.$birthdate.$container);
    this.$body.appendChild(this.$country.$container);
    this.$body.appendChild(this.$phone.$container);
    this.$body.appendChild(this.$passwordChange);

    this.$footer.appendChild(this.$btnCancel);
    this.$footer.appendChild(this.$btnSave);


  }
}

export{ModalOptions}
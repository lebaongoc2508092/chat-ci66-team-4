import { ModalOptionsContent } from "./modalOptionAll/modalOptionContent.js";

class ModalOptions {
  $container = document.createElement("div");
  $modalOptionsContainer = document.createElement("div");//background
  
  $header = document.createElement("div");
  $imgAva = document.createElement("img");
  
  $body = document.createElement("div");

  $name = new ModalOptionsContent("Name", "","Change Name");
  $email =  new ModalOptionsContent("Email", "","Change Email");
  $age =  new ModalOptionsContent("Age", "","Change Age");
  $birthdate =  new ModalOptionsContent("Birthdate", "","Change Birthdate");
  $country =  new ModalOptionsContent("Country", "","Change Country");
  $phone =  new ModalOptionsContent("Tel", "","Change Phone Number");

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

export{ ModalOptions }
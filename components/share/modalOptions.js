import { ModalOptionsContent } from "./modalOptionAll/modalOptionContent.js";
import { PreviewAva } from "./modalOptionAll/previewImgB4Upload.js";
class ModalOptions {
  $container = document.createElement("div");
  $modalOptionsContainer = document.createElement("div");//background
  
  $header = document.createElement("div");
  $imgAva = new PreviewAva();
  
  $body = document.createElement("div");


  $name = new ModalOptionsContent("Name", "","");
  $email =  new ModalOptionsContent("Email", "","");
  $age =  new ModalOptionsContent("Age", "","");
  $birthdate =  new ModalOptionsContent("Birthdate", "","");
  $country =  new ModalOptionsContent("Country", "","");
  $phone =  new ModalOptionsContent("Tel", "","");

  $passwordChange = document.createElement("button");

  $footer = document.createElement("div");
  $btnCancel = document.createElement("button");
  $btnSave = document.createElement("button");

  constructor(){
    this.$passwordChange.innerHTML = "Change Password";

    this.$btnCancel.innerHTML="Cancel"
    this.$btnSave.innerHTML="Save"

    this.$container.appendChild(this.$modalOptionsContainer);

    this.$modalOptionsContainer.appendChild(this.$header);
    this.$modalOptionsContainer.appendChild(this.$body);
    this.$modalOptionsContainer.appendChild(this.$footer);

    this.$header.appendChild(this.$imgAva.$container);
    
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

  setonCancelClick=(listener)=>{
    this.$btnCancel.onclick=listener
    this.$btnSave.onclick=listener
}
}

export{ ModalOptions }
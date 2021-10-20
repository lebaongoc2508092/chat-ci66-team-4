class Modal {
  $container = document.createElement("div");
  $modalContainer = document.createElement("div");//background
  $header = document.createElement("div");
  $body = document.createElement("div");
  $footer = document.createElement("div");

  $btnConfirm = document.createElement("button");
  $btnCancel = document.createElement("button");

  constructor() {
    this.$container.appendChild(this.$modalContainer);
    this.$container.classList.add("modal-backdrop");
    this.$header.classList.add("header-modal");
    this.$body.classList.add("body-modal");
    this.$footer.classList.add("footer-modal");


    this.$modalContainer.appendChild(this.$header);
    this.$modalContainer.appendChild(this.$body);
    this.$modalContainer.appendChild(this.$footer);
    this.$modalContainer.classList.add("modal-container")

    this.$btnConfirm.innerHTML = "Đồng ý";
    this.$btnCancel.innerHTML = "Huỷ";
    this.$footer.appendChild(this.$btnCancel);
    this.$footer.appendChild(this.$btnConfirm);
    this.$btnConfirm.classList.add("btnConfirm");
    this.$btnCancel.classList.add("btnCancel");
    
  }

  setHeader=(title)=>{
      this.$header.innerHTML=title
  }

  setBody=(component)=>{
    this.$body.innerHTML=""
    this.$body.appendChild(component)
  }

  setonConfirmClick=(listener)=>{
      this.$btnConfirm.onclick=listener
  }

  setonCancelClick=(listener)=>{
      this.$btnCancel.onclick=listener
  }

}

export { Modal };

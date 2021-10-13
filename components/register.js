import { Login } from "./login.js";

class Register {
  $container = document.createElement("div");

  $header = document.createElement("div");

  $nav = document.createElement("nav");
  $logo = document.createElement("img");
  $ul = document.createElement("ul");
  $li1 = document.createElement("li");
  $li2 = document.createElement("li");
  $li3 = document.createElement("li");
  $li4 = document.createElement("li");
  $li5 = document.createElement("li");

  $a1 = document.createElement("a");
  $a2 = document.createElement("a");
  $a3 = document.createElement("a");
  $a4 = document.createElement("a");
  $a5 = document.createElement("a");

  $bodyContainer = document.createElement("div");

  $bodyLeftContainer = document.createElement("div");
  $txtTitleH1 = document.createElement("h1");
  $txtSlogan = document.createElement("h3");
  $form = document.createElement("form");
  $inputGroupEmail = new InputGroup("", "email");

  $inputGroupDisplayName = new InputGroup("", "text");

  $inputGroupPassword = new InputGroup("", "password");
  $inputGroupConfirmPassword = new InputGroup("", "password");

  $btnRegister = document.createElement("button");
  $btnGotoLogin = document.createElement("button");

  $linkBrand = document.createElement("div");
  $linkAppstore = document.createElement("img");
  $linkMicrosoft = document.createElement("img");

  $bodyRightContainer = document.createElement("div");
  $bodyRightContainerIMG = document.createElement("img");

  $footer = document.createElement("div");
  $txtFooter = document.createElement("span");

  constructor() {
    // this.$container.classList.add("navbar")
    //header
    this.$logo.src = "https://i.gifer.com/D65G.gif";
    this.$a1.innerHTML = "Phòng họp mặt";
    this.$a2.innerHTML = "Tính năng";
    this.$a3.innerHTML = "Ứng dụng dành cho máy tính";
    this.$a4.innerHTML = "Quyền riêng tư & an toàn";
    this.$a5.innerHTML = "Dành cho nhà phát triển";

    //

    //body
    this.$txtTitleH1.innerHTML = "Trò chuyện thật thuận tiện";
    this.$txtSlogan.innerHTML =
      "Với Messenger, việc kết nối với những người mình yêu mến thật đơn giản và thú vị.";
    this.$btnRegister.innerHTML = "Đăng Nhập";
    this.$btnGotoLogin.innerHTML = "Đăng ký";

    this.$linkAppstore.src =
      "https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/_-Ce3epqZVV.png";
    this.$linkAppstore.style.width = "70px";

    this.$linkMicrosoft.src =
      "https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/puWREWrr5nk.png";
    this.$linkMicrosoft.style.width = "70px";

    this.$bodyRightContainerIMG.src =
      "https://cdn.dribbble.com/users/3377233/screenshots/6958190/media/6911b68174c0fca030b34efee2438bf6.gif";

    this.$txtFooter.innerHTML = "© CI66 Team 4 2021. ";

    //main
    this.$container.appendChild(this.$header);
    this.$container.appendChild(this.$bodyContainer);
    this.$bodyContainer.classList.add("banner");
    this.$container.appendChild(this.$footer);

    //header
    this.$header.appendChild(this.$nav);
    this.$nav.appendChild(this.$logo);
    this.$logo.classList.add("logo");
    this.$nav.appendChild(this.$ul);
    this.$ul.appendChild(this.$li1);
    this.$ul.appendChild(this.$li2);
    this.$ul.appendChild(this.$li3);
    this.$ul.appendChild(this.$li4);
    this.$ul.appendChild(this.$li5);
    this.$li1.appendChild(this.$a1);
    this.$li2.appendChild(this.$a2);
    this.$li3.appendChild(this.$a3);
    this.$li4.appendChild(this.$a4);
    this.$li5.appendChild(this.$a5);

    //body
    this.$bodyContainer.appendChild(this.$bodyLeftContainer);
    this.$bodyLeftContainer.classList.add("bodyLeftContainer");
    this.$bodyContainer.appendChild(this.$bodyRightContainer);
    this.$bodyRightContainer.classList.add("bodyRightContainer");

    this.$bodyLeftContainer.appendChild(this.$txtTitleH1);

    this.$bodyLeftContainer.appendChild(this.$txtSlogan);
    this.$bodyLeftContainer.appendChild(this.$form);
    this.$bodyLeftContainer.appendChild(this.$linkBrand);

    this.$form.appendChild(this.$inputGroupEmail.$container);
    this.$form.appendChild(this.$inputGroupDisplayName.$container)
    this.$form.appendChild(this.$inputGroupPassword.$container);
    this.$form.appendChild(this.$inputGroupConfirmPassword.$container)
    this.$form.appendChild(this.$btnRegister);
    this.$form.appendChild(this.$btnGotoLogin);

    this.$inputGroupEmail.$container.classList.add("inputBox");
    this.$inputGroupDisplayName.$container.classList.add("inputBox")
    this.$inputGroupPassword.$container.classList.add("inputBox");
    this.$inputGroupConfirmPassword.$container.classList.add("inputBox");
    

    this.$btnRegister.classList.add("btnGrpLogin");
    this.$btnGotoLogin.classList.add("btnGrpLogin");

    this.$linkBrand.appendChild(this.$linkAppstore);
    this.$linkBrand.appendChild(this.$linkMicrosoft);

    this.$bodyRightContainer.appendChild(this.$bodyRightContainerIMG);
    this.$bodyRightContainerIMG.classList.add("img");

    this.$footer.appendChild(this.$txtFooter);
  }
}

export { Register };

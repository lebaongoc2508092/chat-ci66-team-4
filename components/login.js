import { InputGroup } from "./share/inputgroup.js";

class Login {
  $container = document.createElement("div");

  $header = document.createElement("div");
  $logo = document.createElement("img");
  $ul = document.createElement("ul");
  $li1 = document.createElement("li");
  $li2 = document.createElement("li");
  $li3 = document.createElement("li");
  $li4 = document.createElement("li");
  $li5 = document.createElement("li");

  $bodyContainer = document.createElement("div");

  $bodyLeftContainer = document.createElement("div");
  $txtTitleH1 = document.createElement("h1");
  $txtSlogan = document.createElement("p");
  $form = document.createElement("form");
  $inputGroupEmail = new InputGroup("Email", "email");
  $inputGroupPassword = new InputGroup("Password", "password");

  $btnLogin = document.createElement("button");
  $btnGotoRegister = document.createElement("button");

  $linkBrand = document.createElement("div");
  $linkAppstore = document.createElement("img");
  $linkMicrosoft = document.createElement("img");

  $bodyRightContainer = document.createElement("div");
  $bodyRightContainerIMG = document.createElement("img");

  $footer = document.createElement("div");
  $txtFooter = document.createElement("span");

  constructor() {
    //header//
    this.$logo.src = "../img/logo.png";
    this.$li1.innerHTML = "Phòng họp mặt";
    this.$li2.innerHTML = "Tính năng";
    this.$li3.innerHTML = "Ứng dụng dành cho máy tính";
    this.$li4.innerHTML = "Quyền riêng tư & an toàn";
    this.$li5.innerHTML = "Dành cho nhà phát triển";
    //

    //body//
    this.$txtTitleH1.innerHTML = "Tụ họp mọi lúc, mọi nơi";
    this.$txtSlogan.innerHTML =
      "Với Messenger, việc kết nối với những người mình yêu mến thật đơn giản và thú vị.";
    this.$btnLogin.innerHTML = "Đăng Nhập";
    this.$btnGotoRegister.innerHTML = "Đăng ký";

    this.$linkAppstore.src = "../img/dlwMcs.png";
    this.$linkAppstore.style.width = "70px";

    this.$linkMicrosoft.src = "../img/dlwMcs.png";
    this.$linkMicrosoft.style.width = "70px";

    this.$bodyRightContainerIMG.src =
      "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/4083525636/original/bEqqKAT6RYu1BGrwOc6wsP41xrZEzr3nzA.gif";

    this.$txtFooter.innerHTML =
      "© Facebook 2021. Logo của Apple và Google Play là nhãn hiệu hàng hóa thuộc chủ sở hữu tương ứng.";

    this.$container.appendChild(this.$header);
    this.$container.appendChild(this.$bodyContainer);
    this.$container.appendChild(this.$footer);

    this.$header.appendChild(this.$logo);
    this.$header.appendChild(this.$ul);
    this.$ul.appendChild(this.$li1);
    this.$ul.appendChild(this.$li2);
    this.$ul.appendChild(this.$li3);
    this.$ul.appendChild(this.$li4);
    this.$ul.appendChild(this.$li5);

    this.$bodyContainer.appendChild(this.$bodyLeftContainer);
    this.$bodyContainer.appendChild(this.$bodyRightContainer);

    this.$bodyLeftContainer.appendChild(this.$txtTitleH1);
    this.$bodyLeftContainer.appendChild(this.$txtSlogan);
    this.$bodyLeftContainer.appendChild(this.$form);
    this.$bodyLeftContainer.appendChild(this.$linkBrand);

    this.$form.appendChild(this.$inputGroupEmail.$container);
    this.$form.appendChild(this.$inputGroupPassword.$container);
    this.$form.appendChild(this.$btnLogin);
    this.$form.appendChild(this.$btnGotoRegister);

    this.$linkBrand.appendChild(this.$linkAppstore);
    this.$linkBrand.appendChild(this.$linkMicrosoft);

    this.$bodyRightContainer.appendChild(this.$bodyRightContainerIMG);

    this.$footer.appendChild(this.$txtFooter);
  }
}

export { Login };

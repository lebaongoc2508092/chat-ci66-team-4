class TitleBar {
  name;
  
  $container = document.createElement("div");
  $txtName = document.createElement("span");

  constructor() {
    this.$txtName.innerHTML = "Vui lòng chọn 1 đoạn hội thoại ...";
    this.$container.appendChild(this.$txtName);
  }

  setName(name) {
    this.name = name;
    this.$txtName.innerHTML = name;
  }
}
export { TitleBar };

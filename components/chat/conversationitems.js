class ConversationItem {
  id;
  name;
  users;

  $container = document.createElement("div");
  $messageImgProfile = document.createElement("img");
  $txtName = document.createElement("span");
  $NoOfUser = document.createElement("small");

  constructor(id, name, users) {
    this.id = id;
    this.name = name;
    this.users = users;

    this.$txtName.innerHTML = name;
    this.$NoOfUser.innerHTML = " (" + users.length + ") online";
    // this.$messageImgProfile.src = "https://media1.giphy.com/avatars/Cubemelt/lxyAsGa7vlEo.gif"

    this.$container.appendChild(this.$messageImgProfile)
    this.$container.appendChild(this.$txtName);
    this.$container.appendChild(this.$NoOfUser);

    this.$container.classList.add("containerMessageIteam");
    this.$messageImgProfile.classList.add("messageImgProfile");
    this.$txtName.classList.add("txtName");
    this.$NoOfUser.classList.add("noOfUser");
  }

  setOnclick = (listener) => {
    this.$container.onclick = () => {
      listener(this.id, this.name, this.users);
    };
  };

  setHighLight = (isHighlighted) => {
    if (isHighlighted) {
      this.$container.style.background = "#7c4dff";
      // this.$container.style.background = "white";
    } else {
      this.$container.style.background = "#000a12";
      // this.$container.style.background = "black";
    }
  };

  setUsers = (users) => {
    this.users = users;
    this.$NoOfUser.innerHTML = "(" + users.length + ")";
  };
}

export { ConversationItem };

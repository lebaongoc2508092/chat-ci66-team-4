class MessageItem {
  $container = document.createElement("div");

  $containerUser = document.createElement("div");
  $imgAvatar = document.createElement("img");
  $txtDisplayName = document.createElement("div");

  $containerContent = document.createElement("div");
  $txtContent = document.createElement("div");
  $btnRemoveContent = document.createElement("button");
  $i = document.createElement("i");
  $imgContent = document.createElement("img");
  id;

  constructor(content, displayName, avatar, id, messageType) {
    if (messageType === "photo") {
      this.$imgContent.src = content;
      this.$txtContent.style.visibility = "hidden";
    } else {
      this.$txtContent.innerText = content;
    }
    this.$txtDisplayName.innerText = displayName;
    this.$imgAvatar.src = avatar;
    this.$i.setAttribute("class", "far fa-trash-alt");
    this.$btnRemoveContent.appendChild(this.$i);
    this.id = id;// this.id = id (id la cai lay duoc tu tren firbase tra ve)


    this.$imgContent.classList.add('imgContent')
    this.$container.classList.add("container-messages");
    this.$imgAvatar.classList.add("img-avatar");
    this.$containerUser.classList.add("container-user");
    this.$txtContent.classList.add("txt-content");
    this.$btnRemoveContent.classList.add("btn-Remove");

    this.$container.appendChild(this.$containerUser);
    this.$container.appendChild(this.$containerContent);

    this.$containerUser.appendChild(this.$imgAvatar);
    this.$containerUser.appendChild(this.$txtDisplayName);

    if (messageType === "photo") {
      this.$containerContent.appendChild(this.$imgContent);
    } else {
      this.$containerContent.appendChild(this.$txtContent);
    }
    this.$containerContent.appendChild(this.$btnRemoveContent);
    this.$btnRemoveContent.addEventListener("click", this.handleDelMessage);

    if (displayName === firebase.auth().currentUser.displayName) {
      // hỏi thầy phần sender
      this.$container.classList.add("my-container-messages");
      this.$containerUser.classList.add("my-container-user");
      this.$containerContent.classList.add("my-txt-content");
      this.$imgAvatar.style.display = "none";
      this.$txtDisplayName.style.display = "none";
      this.$containerContent.appendChild(this.$btnRemoveContent);
      this.$containerContent.appendChild(this.$txtContent);
      // this.$txtContent.appendChild(this.$imgContent);
    }
  }
  handleDelMessage = () => {
    console.log(this.id);

    db.collection("messages")
      .doc(this.id)

      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
}
export { MessageItem };

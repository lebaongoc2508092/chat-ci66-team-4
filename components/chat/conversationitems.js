class ConversationItem {
  id;
  name;
  users;

  $container = document.createElement("div");
  $txtName = document.createElement("span");
  $NoOfUser = document.createElement("span");

  constructor(id, name, users) {
      this.id=id
      this.name=name
      this.users=users

      this.$txtName.innerHTML=name
      this.$NoOfUser.innerHTML=" (" + users.length + ") online";

      this.$container.appendChild(this.$txtName)
      this.$container.appendChild(this.$NoOfUser)

  }

  setOnclick=(listener)=>{
    this.$container.onclick=()=>{
        listener(this.id,this.name,this.users)
    }
  }

  setHighLight=(isHighlighted)=>{
      if(isHighlighted){
          this.$container.style.background="purple"
          this.$container.style.color="yelow"
      }
      else{
          this.$container.style.background="white"
          this.$container.style.color="black"
      }
  }
}

export{ConversationItem}
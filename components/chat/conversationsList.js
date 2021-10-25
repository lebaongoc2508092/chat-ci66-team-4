import { CreateConversationForm } from "./conversationForm.js";
import { ConversationItem } from "./conversationItems.js";

class ConversationsList {
  $container = document.createElement("div");
  $headerConversationList = document.createElement("div");
  $txtConversationsList = document.createElement("p")
  $btnCreatConversations = document.createElement("button");
  $createConversationForm = new CreateConversationForm();

  onConversationItemClick;
  conversationItems = [];

  constructor() {
    this.$btnCreatConversations.innerHTML = "+";
    this.$btnCreatConversations.addEventListener(
      "click",
      this.handleCreateConversationClick
    );
    this.$txtConversationsList.innerHTML = "Chat"

      this.$container.appendChild(this.$headerConversationList)
    this.$headerConversationList.appendChild(this.$txtConversationsList)
    this.$headerConversationList.appendChild(this.$btnCreatConversations);
    this.$container.appendChild(this.$createConversationForm.$container);
    this.$container.classList.add("container-conversation-list")
    this.$headerConversationList.classList.add("header-conversation-list")
    this.$txtConversationsList.classList.add("txt-conversations-list")
    this.$btnCreatConversations.classList.add("btn-creat-conversations")
  }

  setOnConversationItemClick = (listener) => {
    this.onConversationItemClick = listener;
  };

  handleCreateConversationClick = () => {
    this.$createConversationForm.setVisible(true);
  };

  handleConversationAdded = (id, name, users) => {
    const item = new ConversationItem(id, name, users);
    item.setOnclick((id, name, users) => {
      this.onConversationItemClick({
        id: id,
        name: name,
        users: users,
      });
    });
    this.conversationItems.push(item);
    this.$container.appendChild(item.$container);
  };

  handleConversationUpdated = (id, name, users) => {
    this.conversationItems.forEach((item) => {
      if (item.id === id) {
        item.setUsers(users);
      }
    });
  };

  setActiveConversation = (conversation) => {
    this.conversationItems.forEach((item) => {
      if (item.id === conversation.id) {
        item.setHighLight(true);
      } else {
        item.setHighLight(false);
      }
    });
  };
}

export { ConversationsList };

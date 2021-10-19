import { CreateConversationForm } from "./conversationForm.js";
import { ConversationItem } from "./conversationItems.js";

class ConversationsList {
  $container = document.createElement("div");
  $btnCreatConversations = document.createElement("button");
  $createConversationForm = new CreateConversationForm();

  onConversationItemClick;
  conversationItems = [];

  constructor() {
    this.$btnCreatConversations.innerHTML = "+ Tạo mới một đoạn hội thoại";
    this.$btnCreatConversations.addEventListener(
      "click",
      this.handleCreateConversationClick
    );
    this.$container.appendChild(this.$btnCreatConversations);
    this.$container.appendChild(this.$createConversationForm.$container);
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

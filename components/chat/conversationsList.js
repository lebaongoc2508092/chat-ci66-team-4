import { CreateConversationForm } from "./conversationform.js";
import { ConversationItem } from "./conversationitems.js";

class ConversationsList {
  $container = document.createElement("div");
  $btnCreatConversations = document.createElement("button");
  $createConversationForm = new CreateConversationForm();

  onConversationItemClick;
  conversationItems = [];

  constructor() {
    this.$btnCreatConversations.innerHTML = "+ Tạo mới";
    this.$btnCreatConversations.addEventListener(
      "click",
      this.handleCreateConversationList
    );
    this.$container.appendChild(this.$btnCreatConversations);
    this.$container.appendChild(this.$createConversationForm.$container);
  }

  setOnConversationItemClick = (listener) => {
    this.onConversationItemClick = listener;
  };

  handleCreateConversationList = () => {
    this.$createConversationForm.setVisible(true);
  };

  handleConversationAdded = (id, name, users) => {
    const item = new ConversationItem(id, name, users);
    item.setOnclick(() => {
      this.onConversationItemClick({
        id: id,
        name: name,
        users: users,
      });
    });
    this.conversationItems.push(item)
    this.$container.appendChild(item.$container)
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

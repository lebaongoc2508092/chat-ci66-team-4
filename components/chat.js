import { Profile } from "./chat/profile.js";
import { ConversationsList } from "./chat/conversationsList.js";
import { TitleBar } from "./chat/titleBar.js";
class Chat {
  activeConversation;

  $container = document.createElement("div");
  $containerLeft = document.createElement("div");
  $containerMiddle = document.createElement("div");
  $containerRight = document.createElement("div");
  $profile = new Profile();
  $titleBar = new TitleBar();

  $conversationList = new ConversationsList();

  constructor() {
    this.$conversationList.setOnConversationItemClick(
      this.setActiveConversation
    );
    this.$container.appendChild(this.$containerLeft);
    this.$container.appendChild(this.$containerMiddle);
    this.$container.appendChild(this.$containerRight);

    this.$containerLeft.appendChild(this.$profile.$container);
    this.$containerLeft.appendChild(this.$conversationList.$container);
    
    this.$containerMiddle.appendChild(this.$titleBar.$container);

    this.subscribeConversation();
  }

  setActiveConversation = (conversation) => {
    this.activeConversation = conversation;
    this.$titleBar.setName(conversation.name);
    this.$conversationList.setActiveConversation(this.activeConversation);
  };

  subscribeConversation = () => {
    db.collection("conversations").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          this.$conversationList.handleConversationAdded(
            change.doc.id,
            change.doc.data().name,
            change.doc.data().users
          );
        }
      });
    });
  };
}

export { Chat };

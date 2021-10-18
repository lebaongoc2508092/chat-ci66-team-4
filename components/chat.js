import { Profile } from "./chat/profile.js";
import { ConversationsList } from "./chat/conversationsList.js";
import { TitleBar } from "./chat/titleBar.js";
import { Composer } from "./chat/composer.js";
import { MessageList } from "./chat/messageList.js";
import { UserList } from "./chat/userList.js";

class Chat {
  activeConversation = null;
  messagesSubscriber = null;

  $container = document.createElement("div");
  $containerLeft = document.createElement("div");
  $containerMiddle = document.createElement("div");
  $containerRight = document.createElement("div");
  $profile = new Profile();
  //$options = new ModalOptions();
  $titleBar = new TitleBar();
  $composer = new Composer();
  $messageList = new MessageList();
  $userList = new UserList();

  $conversationList = new ConversationsList();

  constructor() {
    this.$container.classList.add("containerchat");
    this.$conversationList.setOnConversationItemClick(
      this.setActiveConversation
    );
    this.$container.appendChild(this.$containerLeft);
    this.$containerLeft.classList.add("containerleft");
    this.$container.appendChild(this.$containerMiddle);
    this.$containerMiddle.classList.add("containermiddle");
    this.$container.appendChild(this.$containerRight);
    this.$containerRight.classList.add("containerright");

    this.$containerLeft.appendChild(this.$profile.$container);
    this.$containerLeft.appendChild(this.$conversationList.$container);

    this.$containerMiddle.appendChild(this.$titleBar.$container);
    this.$containerMiddle.appendChild(this.$messageList.$container);

    this.$containerRight.appendChild(this.$userList.$container);

    this.$containerMiddle.appendChild(this.$composer.$container);
    this.subscribeConversation();
  }

  setActiveConversation = (conversation) => {
    this.activeConversation = conversation;
    this.$titleBar.setName(conversation.name);
    this.$conversationList.setActiveConversation(this.activeConversation);
    this.$composer.setActiveConversation(this.activeConversation);
    this.$userList.setActiveConversation(this.activeConversation);
    this.$messageList.clearMessage();
    this.subscribeMessages();
  };

  subscribeConversation = () => {
    db.collection("conversations")
    .where("users","array-contains", firebase.auth().currentUser.email)
    .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          this.$conversationList.handleConversationAdded(
            change.doc.id,
            change.doc.data().name,
            change.doc.data().users
          );
        }
        if (change.type === "modified") {
          this.$conversationList.handleConversationAdded(
            change.doc.id,
            change.doc.data().name,
            change.doc.data().users
          );
          this.$userList.handleConversationUpdate(
            change.doc.id,
            change.doc.data().name,
            change.doc.data().users
          );
        }
      });
    });
  };

  subscribeMessages = () => {
    if (this.messagesSubscriber !== null) {
      this.messagesSubscriber();
    }
    this.messagesSubscriber = db
      .collection("messages")
      .where("ConversationId", "==", this.activeConversation.id)
      .orderBy("sentAt")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if(change.type === "added")
          this.$messageList.addMessage(change.doc.data());
        });
      });
  };
}

export { Chat };

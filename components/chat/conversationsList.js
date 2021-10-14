import {CreateConversationForm} from "./conversationform.js"


class ConversationsList{
    $container = document.createElement("div");
    $btnCreatConversations = document.createElement("button");
    $createConversationForm=new CreateConversationForm()

    constructor(){
        this.$btnCreatConversations.innerHTML="+ Tạo mới"
        this.$btnCreatConversations.addEventListener("click",this.handleCreateConversationList)
        this.$container.appendChild(this.$btnCreatConversations)
        this.$container.appendChild(this.$createConversationForm.$container)
    }

    handleCreateConversationList=()=>{
        this.$createConversationForm.setVisible(true)
    }
}

export {ConversationsList};
import {Profile} from "./chat/profile.js";
import{ConversationsList} from "./chat/conversationsList.js"

class Chat{
    $container = document.createElement("div");
    $containerLeft = document.createElement("div");
    $containerMiddle = document.createElement("div");
    $containerRight = document.createElement("div");
    $profile = new Profile();
    $conversationList=new ConversationsList()


    constructor(){
        this.$container.appendChild(this.$containerLeft);
        this.$container.appendChild(this.$containerMiddle);
        this.$container.appendChild(this.$containerRight);
        
        this.$containerLeft.appendChild(this.$profile.$container);
        this.$containerLeft.appendChild(this.$conversationList.$container)
    }    
}
    
export {Chat}
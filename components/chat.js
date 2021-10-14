import {Profile} from "./chat/profile.js";
class Chat{
    $container = document.createElement("div");
    $containerLeft = document.createElement("div");
    $containerMiddle = document.createElement("div");
    $containerRight = document.createElement("div");
    $profile = new Profile();


    constructor(){
        this.$container.appendChild(this.$containerLeft);
        this.$container.appendChild(this.$containerMiddle);
        this.$container.appendChild(this.$containerRight);
        
        this.$containerLeft.appendChild(this.$profile.$container);
    }    
}
    
export {Chat}
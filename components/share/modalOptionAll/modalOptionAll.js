class ModalOptionsContens{
    $container = document.createElement("div");
    $ingredientName = document.createElement("label");
    $ingredientNameContent = document.createElement("span");
    $ingredientNameContentChanged = document.createElement("span");

    constructor(label, spanContent, spanContentChanged) {
        this.$ingredientName.innerHTML = label;
        this.$ingredientNameContent.innerHTML = spanContent;
        this.$ingredientNameContentChanged.innerHTML = spanContentChanged;
        
        this.$container.appendChild(this.$ingredientName);
        this.$container.appendChild(this.$ingredientNameContent);
        this.$container.appendChild(this.$ingredientNameContentChanged);
    }
}

export {ModalOptionsContens};
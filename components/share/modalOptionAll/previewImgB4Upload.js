class PreviewAva {


    $container =document.createElement("div");

    $inputAva = document.createElement("input");
    $avaPreviewBox = document.createElement("div");
    $txtAvaPreview = document.createElement("span"); //image preview default
    $avaPreviewImg = document.createElement("img");//image preview img


    constructor () {
        this.$txtAvaPreview.innerHTML = "..."
        
        this.$container.appendChild(this.$avaPreviewBox);
            this.$avaPreviewBox.classList("imagePreview")
        this.$container.appendChild(this.$inputAva);
            this.$inputAva.type = "file"
        
        this.$avaPreviewBox.appendChild(this.$avaPreviewImg);
            this.$avaPreviewImg.classList("image-preview__image")
            
            this.$avaPreviewImg.alt = "Avata"
        this.$avaPreviewBox.appendChild(this.$txtAvaPreview);
            this.$txtAvaPreview.classList("image-preview__default-text")
            
        

        this.$inputAva.addEventListener("change", function() {
            const file = this.files[0];

            if (file) {
                const reader = new FileReader();

                // this.$txtAvaPreview.style.display = "none";
                // this.$avaPreviewImg.style.display = "block";

                reader.addEventListener("load", function() {
                    // console.log(this);
                   this.$avaPreviewImg.setAttribute("src", this.result); 
                });

                reader.readAsDataURL(file);
            }
        })
        
    }
}

export {PreviewAva}
class PreviewAva {
    $container =document.createElement("div");

    $btnChooseAva = document.createElement("input");
    $chooseAva = document.createElement("img");
    $btnUploadAva = document.createElement("button")

    constructor(){
        this.$btnChooseAva.type = "file";
        this.$btnChooseAva.setAttribute('id', 'ava')
        this.$chooseAva.setAttribute('id','chooseAva') //phải set cái id như vậy mới ad đc vào trong functuon
        this.$btnUploadAva.innerHTML = "Upload"

        this.$container.appendChild(this.$chooseAva);
        this.$container.appendChild(this.$btnChooseAva);
        this.$container.appendChild(this.$btnUploadAva);

        // this.$btnUploadAva.onclick = function(){uploadImage()}
        this.$btnUploadAva.addEventListener("click", this.uploadImage);
        
        this.$btnChooseAva.addEventListener("change", function(event) {
            if(event.target.files.length == 0){
                return;
            }
            var tempUrl = URL.createObjectURL(event.target.files[0]);
            chooseAva.setAttribute("src", tempUrl)
            //đây chính là cía id đã đặt ở trên
        });

      
    }
    uploadImage = () => {
        const ref = firebase.storage().ref();
        const file = document.querySelector('ava').files[0];
        const metadata = {
            contentType: file.type
        };
        const name = file.name;
        const uploadIMG = ref.child(name).put(file, metadata);
        uploadIMG
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                console.log(url)
            }) 
            .catch(console.error)   
    }

}

export {PreviewAva}
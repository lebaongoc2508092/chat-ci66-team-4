class PreviewAva {
    $container =document.createElement("div");

    $labelBtnChooseAva = document.createElement("label")
    $btnChooseAva = document.createElement("input");
    $btnCUP = document.createElement("div")
    $chooseAva = document.createElement("img");
    $btnUploadAva = document.createElement("button")
    $frameAva = document.createElement("div")

    constructor(){
        this.$btnChooseAva.type = "file";
        this.$btnChooseAva.setAttribute('id', 'ava')
        this.$chooseAva.setAttribute('id','chooseAva') //phải set cái id như vậy mới ad đc vào trong functuon
        this.$btnUploadAva.innerHTML = "Upload"
        this.$btnUploadAva.classList.add("btnUploadAva")
        this.$btnCUP.classList = "btnCUP"
        this.$labelBtnChooseAva.innerHTML = "Change your Ava"
        this.$labelBtnChooseAva.classList.add("labelBtnChooseAva")

        this.$container.appendChild(this.$frameAva);
        this.$frameAva.classList.add("frameAva");
        this.$chooseAva.src = "https://i.pinimg.com/originals/c3/28/7b/c3287b338bcfbedc6bf0382a634f2334.gif"
        this.$frameAva.appendChild(this.$chooseAva);
        this.$container.appendChild(this.$btnCUP)
        this.$btnCUP.appendChild(this.$labelBtnChooseAva);
        this.$labelBtnChooseAva.appendChild(this.$btnChooseAva);
        this.$btnCUP.appendChild(this.$btnUploadAva);
        

        this.$btnUploadAva.addEventListener("click", this.uploadImage);
        
        this.$btnChooseAva.addEventListener("change", function(event) {
            if(event.target.files.length == 0){
                return;
            }
            var tempUrl = URL.createObjectURL(event.target.files[0]);
            chooseAva.setAttribute("src", tempUrl)
            //đây chính là cái id đã đặt ở trên
        });
    }

    uploadImage = () => {
        const ref = firebase.storage().ref();
        const file = document.getElementById('ava').files[0];
        const metadata = {
            contentType: file.type
        };
        const name = file.name;
        const uploadIMG = ref.child(name).put(file, metadata);
        uploadIMG
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                let imageUserProfile = url;
                const user = firebase.auth().currentUser
                user.updateProfile({
                    photoURL: imageUserProfile
                }).then(() => {
                    alert("User update profile avatar successfully");
                }).catch(console.error)  
            }) 
            .catch(console.error)   
        }

        


    }



    

    export {PreviewAva}
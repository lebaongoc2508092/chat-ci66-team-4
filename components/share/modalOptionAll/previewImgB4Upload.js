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
                console.log(imageUserProfile);
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

    // dowloadImg = () => {
    //         storageRef.child(this.url).getDownloadURL()
    //     .then((url) => {
    //         // `url` is the download URL for 'images/stars.jpg'

    //         // This can be downloaded directly:
    //         var xhr = new XMLHttpRequest();
    //         xhr.responseType = 'blob';
    //         xhr.onload = (event) => {
    //             var blob = xhr.response;
    //         };
    //         xhr.open('GET', url);
    //         xhr.send();

    //         // Or inserted into an <img> element
    //         var img = document.getElementById('myimg');
    //         img.setAttribute('src', url);
    //     })
    //     .catch((error) => {
    //         // Handle any errors
    //     });

    // }

    export {PreviewAva}
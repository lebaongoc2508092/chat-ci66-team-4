// import {InputGroup} from "../share/inputgroup.js";

// class inputImage {
//     $container = document.createElement("div");
//     $linkInputImageUserProfile = new InputGroup("", "file", "");
//     $buttonUploadImage = document.createElement('button');
//     // $linkInputImageUserProfile = document.setAttribute("class", "photo");
//     // $linkInputImageUserProfile = document.getAttribute("type", "file");

//     constructor() {
//         this.$container.appendChild(this.$linkInputImageUserProfile.$container);
//         this.$container.appendChild(this.$buttonUploadImage)

//         this.$buttonUploadImage.innerHTML = "Tải ảnh lên"
//         this.$buttonUploadImage.addEventListener("click", this.handleUploadImage); 
//     }
// }

// function handleUploadImage(){
//     const ref = firebase.storage().ref()
//     const file = this.$linkInputImageUserProfile.file[0];
//     const metadata = {
//         contentType : file.type
//     };
//     const name = file.name;

//     const handleUploadImageToFirebase = ref.child(name).put(file, metadata);

//     handleUploadImageToFirebase
//         .then(snapshot => snapshot.ref.getDowloadURL())
//         .then(url => {
//             console.log(url);
//         })
//         .catch(console.error)
// }

// export { inputImage }
import { Login } from "./components/login.js";
import { Chat } from "./components/chat.js";
const app = document.getElementById("new_app");

const setScreen = ($container) => {
  app.innerHTML = "";
  app.appendChild($container);
};

const loginScreen = new Login();
setScreen(loginScreen.$container)

firebase.auth().onAuthStateChanged((user) => {
  //console.log("Hello ", user)
  if (user != null) {
    const chatScreen = new Chat();
    setScreen(chatScreen.$container);
  } else {
    const loginScreen = new Login();
    setScreen(loginScreen.$container);
  }
});

export { setScreen };

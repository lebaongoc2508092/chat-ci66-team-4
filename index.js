import { Login } from "./components/login.js";

const app = document.getElementById("new_app");

const setScreen = ($container) => {
  app.innerHTML = "";
  app.appendChild($container);
};

const loginScreen = new Login();
setScreen(loginScreen.$container)

export { setScreen };

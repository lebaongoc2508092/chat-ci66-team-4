import { Login } from "./components/login.js";
import { Register } from "./components/register.js";

const app = document.getElementById("new_app");

const setScreen = ($container) => {
  app.innerHTML = "";
  app.appendChild($container);
};

const loginScreen = new Login();
setScreen(loginScreen.$container)

export { setScreen };

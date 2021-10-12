import { Login } from "./components/login.js";

const app = document.getElementById("new_app");

const setScreen = new Login()
app.appendChild(setScreen.$container)

export { setScreen };
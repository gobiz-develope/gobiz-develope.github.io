import loadComponent from "../../helpers/loadComponent.js";
import fetchReg from "./fetchreg.js";
import smoothScroll from "../../helpers/smoothscroll.js";

export default function loadRegister() {
  const promise = loadComponent("", "./register.html");

  promise
    .then(() => {
      smoothScroll();
      fetchReg();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

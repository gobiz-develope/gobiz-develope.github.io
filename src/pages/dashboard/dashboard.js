import loadComponent from "../../helpers/loadComponent.js";
import smoothScroll from "../../helpers/smoothscroll.js";

export default function loadDashboard() {
  const promises = [
    loadComponent("aside.sidebar", "../../components/sidebar/sidebar.html"),
    loadComponent("header.topbar", "../../components/topbar/topbar.html"),
  ];

  Promise.all(promises)
    .then(() => {
      smoothScroll();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

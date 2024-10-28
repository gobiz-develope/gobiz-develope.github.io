import loadComponent from "../../helpers/loadComponent.js";
import navbar from "../../components/navbar/navbar.js";
import catalogFilter from "../../pages/catalog/catalog-filter/catalogFilter.js";
import catalogDisplay from "../../pages/catalog/catalog-display/catalogDisplay.js";
import smoothScroll from "../../helpers/smoothscroll.js";

export default function loadCatalog() {
  const promises = [
    loadComponent("header.navbar", "../../components/navbar/navbar.html"),
    loadComponent(
      ".catalog .catalog-filter",
      "../../pages/catalog/catalog-filter/catalog-filter.html"
    ),
    loadComponent(
      ".catalog .catalog-display",
      "../../pages/catalog/catalog-display/catalog-display.html"
    ),
    loadComponent("footer.footer", "../../components/footer/footer.html"),
  ];

  Promise.all(promises)
    .then(() => {
      smoothScroll();
      navbar();
      catalogFilter();
      catalogDisplay();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

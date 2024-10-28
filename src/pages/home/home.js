import loadComponent from "../../helpers/loadComponent.js";
import smoothScroll from "../../helpers/smoothScroll.js";
import navbar from "../../components/navbar/navbar.js";
import hero from "../../pages/home/hero/hero.js";
import categories from "../../pages/home/categories/categories.js";
import slide from "../../pages/home/partners/slide.js";
import products from "../../pages/home/products/products.js";
import members from "../../pages/home/members/members.js";

export default function loadHome() {
  const promises = [
    loadComponent("header.navbar", "../../components/navbar/navbar.html"),
    loadComponent(".home .hero", "../../pages/home/hero/hero.html"),
    loadComponent(
      ".home .categories",
      "../../pages/home/categories/categories.html"
    ),
    loadComponent(".home .products", "../../pages/home/products/products.html"),
    loadComponent(".home .join", "../../pages/home/join/join.html"),
    loadComponent(".home .members", "../../pages/home/members/members.html"),
    loadComponent(".home .partners", "../../pages/home/partners/partners.html"),
    loadComponent(
      ".home .testimonials",
      "../../pages/home/testimonials/testimonials.html"
    ),
    loadComponent("footer.footer", "../../components/footer/footer.html"),
  ];

  Promise.all(promises)
    .then(() => {
      smoothScroll();
      navbar();
      hero();
      categories();
      products();
      slide();
      members();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

import loadComponent from "../../helpers/loadComponent.js";
import navbar from "../../components/navbar/navbar.js";
import smoothScroll from "../../helpers/smoothScroll.js";
import productDetailHeader from "./header/header.js";
import productDetailImage from "./image/image.js";

export default function loadProductDetail() {
  const promises = [
    loadComponent("header.navbar", "../../components/navbar/navbar.html"),
    loadComponent(
      ".product-detail .product-detail-header",
      "../../pages/product-detail/header/header.html"
    ),
    loadComponent(
      ".product-detail .product-detail-image",
      "../../pages/product-detail/image/image.html"
    ),
    loadComponent("footer.footer", "../../components/footer/footer.html"),
  ];

  Promise.all(promises)
    .then(() => {
      navbar();
      smoothScroll();
      productDetailHeader();
      productDetailImage();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}

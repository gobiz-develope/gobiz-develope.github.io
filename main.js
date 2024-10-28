import loadHome from "./src/pages/home/home.js";
import loadCatalog from "./src/pages/catalog/catalog.js";
import loadLogin from "./src/pages/login/login.js";
import loadRegister from "./src/pages/register/register.js";
import loadLoginQr from "./src/pages/login-qr/loginQr.js";
import loadDashboard from "./src/pages/dashboard/dashboard.js";
import loadProductDetail from "./src/pages/product-detail/productDetail.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "lenis/dist/lenis.css";

const BASE_PATH = "/gobiz-develope.github.io";

function loadPage(path) {
  const main = document.getElementById("main");
  main.innerHTML = "";

  let pageUrl;
  switch (path) {
    case `${BASE_PATH}/`:
    case "/":
      pageUrl = "./src/pages/home/home.html";
      break;
    case `${BASE_PATH}/catalog`:
      pageUrl = "./src/pages/catalog/catalog.html";
      break;
    case `${BASE_PATH}/product-detail`:
      pageUrl = "./src/pages/product-detail/product-detail.html";
      break;
    case `${BASE_PATH}/login`:
      pageUrl = "./src/pages/login/login.html";
      break;
    case `${BASE_PATH}/register`:
      pageUrl = "./src/pages/register/register.html";
      break;
    case `${BASE_PATH}/login-qr`:
      pageUrl = "./src/pages/login-qr/login-qr.html";
      break;
    case `${BASE_PATH}/dashboard`:
      pageUrl = "./src/pages/dashboard/dashboard.html";
      break;
    // default:
    // pageUrl = "./pages/404.html"; // Halaman 404 opsional
    //   break;
  }

  // Memuat halaman dari URL yang ditentukan
  if (pageUrl) {
    fetch(pageUrl)
      .then((response) => response.text())
      .then((data) => {
        main.innerHTML = data;
        if (path === `${BASE_PATH}/` || path === "/") {
          loadHome();
        } else if (path === `${BASE_PATH}/catalog`) {
          loadCatalog();
        } else if (path === `${BASE_PATH}/product-detail`) {
          loadProductDetail();
        } else if (path === `${BASE_PATH}/login`) {
          loadLogin();
        } else if (path === `${BASE_PATH}/register`) {
          loadRegister();
        } else if (path === `${BASE_PATH}/login-qr`) {
          loadLoginQr();
        } else if (path === `${BASE_PATH}/dashboard`) {
          loadDashboard();
        }
      })
      .catch((error) => {
        main.innerHTML = "<p>Error loading page.</p>";
        console.error("Error loading page:", error);
      });
  }
}

function navigate(path) {
  window.history.pushState({}, "", path);
  loadPage(path);
}

// Menangani event saat pengguna menekan tombol kembali di browser
window.addEventListener("popstate", () => {
  loadPage(window.location.pathname);
});

// Memuat halaman sesuai URL saat pertama kali dimuat
window.addEventListener("load", () => {
  loadPage(window.location.pathname || `${BASE_PATH}/`);
});

// Menangani klik tautan dengan class "to-link" agar menggunakan fungsi navigate
document.addEventListener("click", (e) => {
  const target = e.target.closest("a");
  if (target && target.matches(".to-link")) {
    e.preventDefault();
    const path = target.getAttribute("href").startsWith(BASE_PATH)
      ? target.getAttribute("href")
      : `${BASE_PATH}${target.getAttribute("href")}`;
    navigate(path);
  }
});

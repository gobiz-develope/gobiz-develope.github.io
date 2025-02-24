import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export default function cookieToDecode(cookieName) {
  const token = Cookies.get(cookieName);

  if (!token) {
    console.error(`Cookie dengan nama ${cookieName} tidak ditemukan.`);
    return null;
  }

  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Gagal mendecode token:", error);
    return null;
  }
}

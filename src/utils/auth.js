import Cookies from "js-cookie";
import Config from "@/config";
console.log(Cookies);
console.log(Config);
const TOKEN_KEY = Config;
export const getToken = () => {
  return Cookies.get(TOKEN_KEY);
};

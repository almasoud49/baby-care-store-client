import { jwtDecode } from "jwt-decode";

export const tokenDecoder = (token: string) => {
  return jwtDecode(token);
};
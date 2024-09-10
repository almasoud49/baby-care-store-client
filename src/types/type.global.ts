import { USER_ROLE } from "./role.constants";

export type TProduct = {
  _id: string;
  title: string;
  price: string;
  ratings: string;
  brand: string;
  category: string;
  image: string;
  description: string;
  flashSale: boolean;
  flashSaleOffer?: string;
  discount?: string;
}



export type TUserRole = keyof typeof USER_ROLE;
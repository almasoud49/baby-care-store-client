/* eslint-disable @typescript-eslint/ban-types */
import { USER_ROLE } from "./role.constants";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

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

export type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "medium";
  fullWidth?: boolean;
  placeholder?: string;
  required?: boolean;
};

export type TProductProps ={
  _id: string;
  quantity: number;
  image: string;
  title: string;
  price: string;  
}

export type TUserRole = keyof typeof USER_ROLE;

export type TDrawerMenuItem = {
  title: string;
  path: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
}
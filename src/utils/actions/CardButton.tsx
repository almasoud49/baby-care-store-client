/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Box } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";


const CardButton = ({ product }:  any) => {
    const dispatch = useAppDispatch();
  return (
    <div>
      <Box component="button" onClick={() => dispatch(addToCart(product))}>
        <AddShoppingCartIcon
          sx={{ fontSize: 25, marginRight: "5px", color: "#EF4444" }}
        />
      </Box>
    </div>
  );
};

export default CardButton;

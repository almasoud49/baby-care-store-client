"use client";
import { Button } from "@mui/material";
import React from "react";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";

const CardButton = ({ product }: any) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => dispatch(addToCart(product))}
        sx={{
          textTransform: "none",
          borderColor: "#00aaff",
          color: "#00aaff",
          "&:hover": {
            backgroundColor: "#00aaff",
            color: "#fff",
          },
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default CardButton;

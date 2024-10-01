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
        // sx={{
        //   textTransform: "none",
        //   borderColor: "#00aaff",
        //   color: "#00aaff",
        //   "&:hover": {
        //     backgroundColor: "#00aaff",
        //     color: "#fff",
        //   },
        // }}
        sx={{
          // margin: "10px 0px",
          // padding: "12px 0",
          backgroundColor: "transparent",
          border: "1px solid #0077FF",
          color: "#0077FF",
          // borderRadius: "20px",
          "&:hover": {
            backgroundColor: "#0077FF",
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

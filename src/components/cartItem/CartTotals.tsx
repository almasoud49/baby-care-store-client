"use client";
import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentCartData } from "@/redux/features/cart/cartSlice";
import { useCurrentToken } from "@/redux/features/auth/authSlice";

const CartTotals = () => {
  const cartData = useAppSelector(useCurrentCartData);
  const token = useAppSelector(useCurrentToken);


const subTotal = cartData.reduce((total, item) => {
    const price = parseFloat(item.price);
    const quantity = item.quantity; 
  
    if (!isNaN(price) && price >= 0 && quantity > 0) {
      return total + price * quantity;
    }
    return total;
  }, 0);

  const fixedSubTotal = subTotal.toFixed(2);
  const shippingRate = 15;
  const totalAmount = (subTotal + shippingRate).toFixed(2);

  return (
    <Box
      sx={{
        border: "1px dashed #c1c1c1",
        padding: "15px",
        borderRadius: "5px",
      }}
    >
      <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
        Cart Totals
      </Typography>
      <Divider />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0",
        }}
      >
        <Typography>Subtotal</Typography>
        <Typography fontSize="18px" fontWeight={600}>
          $ {fixedSubTotal} 
        </Typography>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0",
        }}
      >
        <Typography>Estimated Shipping</Typography>
        <Typography fontSize="18px" fontWeight={600}>
         $ {shippingRate}
        </Typography>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0",
        }}
      >
        <Typography>Estimated Total</Typography>
        <Typography fontSize="18px" fontWeight={600}>
         $ {totalAmount} 
        </Typography>
      </Stack>
      {token ? (
        <Box
          component={Link}
          href="/checkout"
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <Button
            fullWidth
            // sx={{
            //   padding: "12px 0",
            //   backgroundColor: "#EF4444",
            //   "&:hover": {
            //     backgroundColor: "#EF4444",
            //   },
            // }}
            // variant="contained"

            sx={{
              padding: "12px 0",
              borderRadius: "9999px",
              backgroundColor: "#4285F4",
              color: "#FFFFFF", 
              "&:hover": {
                  backgroundColor: "#4285F4", 
              },
          }}
          variant="contained"
            
          >
            Proceed to Checkout
          </Button>
        </Box>
      ) : (
        <Box
          component={Link}
          href="/login"
          sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        >
          <Button
            fullWidth
            // sx={{
            //   padding: "12px 0",
            //   backgroundColor: "#EF4444",
            //   "&:hover": {
            //     backgroundColor: "#EF4444",
            //   },
            // }}
            sx={{
              // width: "200px",
              padding: "12px 0",
              // borderRadius: "9999px",
              backgroundColor: "#4285F4",
              color: "#FFFFFF", 
              "&:hover": {
                  backgroundColor: "#4285F4", 
              },
          }}
            variant="contained"
          >
            Proceed to Checkout
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CartTotals;

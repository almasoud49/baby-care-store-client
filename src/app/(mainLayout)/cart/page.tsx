"use client"
import React from 'react';
import { Box,  Container, Grid, Stack, Typography } from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Link from "next/link";
import { useAppSelector } from '@/redux/hooks';
import { useCurrentCartData } from '@/redux/features/cart/cartSlice';
import CartItem from '@/components/cartItem/CartItem';
import CartTotals from '@/components/cartItem/CartTotals';



const CartPage = () => {
    const cartData = useAppSelector(useCurrentCartData);

   

    return (

<div className='mt-20'>
<Container>
      <Box marginTop={5}>
        {cartData.length > 0 ? (
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={8}>
              <CartItem />
            </Grid>
            <Grid item xs={4}>
              <CartTotals />
            </Grid>
          </Grid>
        ) : (
          <Stack
            display="flex"
            alignItems="center"
            justifyItems="center"
            margin="120px 0"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyItems="center"
              flexDirection="column"
            >
              <RemoveShoppingCartIcon sx={{ fontSize: 80, color: "#0C1734" }} />
              <Typography sx={{ fontSize: "22px" }}>
                Your cart is currently empty.{" "}
              </Typography>
            </Box>
            <Box
              // sx={{
              //   backgroundColor: "#0C1734",
              //   padding: "12px 22px",
              //   color: "#fff",
              //   cursor: "pointer",
              //   borderRadius: "5px",
              //   fontSize: "18px",
              //   marginTop: "10px"
              // }}
              sx={{
                width: "200px",
                padding: "15px ",
                fontSize: "18px",
                borderRadius: "5px",
                textAlign:"center",
                marginTop: "10px",
                cursor: "pointer",
                backgroundColor: "#4285F4",
                color: "#FFFFFF", 
                "&:hover": {
                    backgroundColor: "#4285F4", 
                },
            }}
              component={Link}
              href="/products"
            >
              Return to Shop
            </Box>
          </Stack>
        )}
      </Box>
    </Container>
</div>
    );
};

export default CartPage;
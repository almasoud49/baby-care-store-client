"use client";
import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToCart, removeAllDataFromCart, removeFromCart, useCurrentCartData } from '@/redux/features/cart/cartSlice';



const CartItem = () => {
    const cartData = useAppSelector(useCurrentCartData);
  const dispatch = useAppDispatch();

    return (
<div>
<Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "600" }}>Product</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Price</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartData.map((item) => (
              <TableRow
                key={item._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Stack display="flex" flexDirection="row" alignItems="center">
                    <Image
                      src={item.image}
                      width={60}
                      height={60}
                      alt="Product Image"
                    />
                    <Typography fontSize={16} marginLeft={1}>
                      {item.title}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell>$ {item.price}</TableCell>
                <TableCell>
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      justifyItems: "center",
                      justifyContent: "space-evenly",
                      border: "1px solid #c1c1c1",
                      padding: "5px 0",
                      borderRadius: "5px",
                    }}
                  >
                    <Box
                      component="button"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      <AddIcon sx={{ fontSize: 20, cursor: "pointer" }} />
                    </Box>
                    {item.quantity}
                    <Box
                      component="button"
                      onClick={() => dispatch(removeFromCart(item._id))}
                    >
                      <RemoveIcon sx={{ fontSize: 20, cursor: "pointer" }} />
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                 $ {(parseFloat(item.price) * item.quantity).toFixed(2)} 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        sx={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Stack
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <TextField
            label="Coupon Code"
            placeholder="Coupon code"
            variant="outlined"
          />
          <Button
            // sx={{
            //   width: "150px",
            //   padding: "15px 0",
            //   marginLeft: "5px",
            //   backgroundColor: "#EF4444",
            //   "&:hover": {
            //     backgroundColor: "#EF4444",
            //   },
            // }}
            sx={{
              width: "150px",
              padding: "15px 0",
              marginLeft: "5px",
              backgroundColor: "#4285F4",
              color: "#FFFFFF", 
              "&:hover": {
                  backgroundColor: "#4285F4", 
              },
          }}
            variant="contained"
          >
            Apply Coupon
          </Button>
        </Stack>
        <Box
          component="button"
          onClick={() => dispatch(removeAllDataFromCart())}
          // sx={{
          //   width: "150px",
          //   padding: "15px 0",
          //   marginLeft: "5px",
          //   color: "#fff",
          //   borderRadius: "5px",
          //   backgroundColor: "#0C1734",
          //   "&:hover": {
          //     backgroundColor: "#0C1734",
          //   },
          // }}
          sx={{
            width: "150px",
            padding: "15px 0",
            backgroundColor: "transparent",
            border: "1px solid #0077FF",
            color: "#0077FF",
            // borderRadius: "20px",
            "&:hover": {
              // backgroundColor: "#0077FF",
              color: "#0077FF",
            },
          }}
        >
          Empty Cart
        </Box>
      </Stack>
    </Box>
</div>
    );
};

export default CartItem;
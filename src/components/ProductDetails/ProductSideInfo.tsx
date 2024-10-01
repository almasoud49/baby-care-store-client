"use client";
import React from 'react';
import SocialIcons from "../shared/SocialIcon/SocialIons";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Cable, Heart, Mail, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/cart/cartSlice';

const ProductSideInfo = ({product}:any) => {
    const {brand,title,flashSale,flashSaleOffer,price,ratings,category,} = product;
    const dispatch = useAppDispatch();

    return (
<Stack>
      <span className="text-md font-regular text-[#0C1734] inline-block">
        {brand}
      </span>
      <Box margin="10px 0">
        <h1 className=" text-2xl font-semibold">{title}</h1>
      </Box>
      {flashSale ? (
        <Box display="flex" alignItems="center">
          <p className="text-2xl font-semibold text-[#0C1734]">
            ${flashSaleOffer}
          </p>
          <p className=" text-xl font-medium text-gray-600 line-through ml-3">
            ${price}
          </p>
        </Box>
      ) : (
        <Box>
          <p className=" text-xl font-medium text-[#0C1734]">
            ${price}
          </p>
        </Box>
      )}
      <Box display="flex" alignItems="center" marginTop="10px">
        <p className="text-lg font-regular mr-2">Product Status:</p>
        <p className="text-md font-medium text-red-500">In stock</p>
      </Box>
      <Box display="flex" alignItems="center" margin="2px 0">
        <p className="text-lg font-regular mr-2">Product Ratings:</p>
        <p className="text-md font-medium text-red-500">{ratings}</p>
      </Box>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: "20px",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          sx={{
            border: "1px solid #c1c1c1",
            padding: "6px 20px",
            borderRadius: "5px",
          }}
        >
          <Minus color="#363636" size={20} />
          <h1 className="text-lg font-semibold mx-5">0</h1>
          <Plus color="#363636" size={20} />
        </Box>
        <Box component="button" onClick={() => dispatch(addToCart(product))}>
          <Button
          sx={{
            width: "200px",
            padding: "15px 0",
            // borderRadius: "9999px",
            backgroundColor: "#4285F4",
            color: "#FFFFFF", 
            "&:hover": {
                backgroundColor: "#4285F4", 
            },
        }}
          
          size="large">Add to Cart </Button>
        </Box>
      </Stack>
      <hr className=" my-5 border-gray-100 border-[1px]" />
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Heart size={20} color="#363636" />
          <Typography
            component={Link}
            href="/"
            sx={{
              fontSize: "15px",
              marginLeft: "5px",
              "&:hover": { color: "#0C1734" },
            }}
          >
            Add to wishlist
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Cable size={20} color="#363636" />
          <Typography
            component={Link}
            href="/"
            sx={{
              fontSize: "15px",
              marginLeft: "5px",
              "&:hover": { color: "#0C1734" },
            }}
          >
            Add to compare
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Mail size={20} color="#363636" />
          <Typography
            component={Link}
            href="/"
            sx={{
              fontSize: "15px",
              marginLeft: "5px",
              "&:hover": { color: "#0C1734" },
            }}
          >
            Ask about product
          </Typography>
        </Box>
      </Stack>
      <hr className=" my-5 border-gray-100 border-[1px]" />
      <Box>
        <Typography
          sx={{ fontSize: "18px", fontWeight: "500", color: "#363636" }}
        >
          Category: <span className="text-[#0C1734]">{category}</span>
        </Typography>
      </Box>
      <SocialIcons />
    </Stack>
    );
};

export default ProductSideInfo;
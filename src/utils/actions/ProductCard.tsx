
"use client";
import { TProduct } from "@/types/type.global";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CardButton from "./CardButton"; 

const ProductCard = ({ product }: { product: TProduct }) => {
  const { image, discount, title, flashSaleOffer } = product;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Stack
      sx={{
        padding: "10px",
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <Box
        position="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          className="w-full h-[250px] object-cover mx-auto p-3 relative"
          src={image}
          width={200}
          height={200}
          alt="Product Image"
        />

        {/* Discount Badge */}
        <p
          className={`${
            discount
              ? "absolute top-0 right-0 p-1  text-[14px] text-center text-white bg-red-500  w-[40px] h-[30px] rounded-lg"
              : ""
          }`}
        >
          {`${discount ? discount : ""}`}
        </p>

        {/* Buttons that appear at the bottom when hovered */}
        {isHovered && (
          <Box
            sx={{
              position: "absolute",
              bottom: 10, 
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "center",
              gap: 2, 
            }}
          >
            {/* Add to Cart Button (CardButton component) */}
            <CardButton product={product} />

            {/* Details Button */}
            <Link href={`/products/${product._id}`}>
              <Button
                variant="outlined"
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
                Details
              </Button>
            </Link>
          </Box>
        )}
      </Box>

      {/* Product Title and Price */}
      <Box>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "bold", color: "#363636" }}
        >
          {title}
        </Typography>
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {flashSaleOffer ? (
            <Box display="flex" alignItems="center">
              {/* <p className="text-md font-semibold text-[#0C1734]">
                ${flashSaleOffer}
              </p> */}
              {/* <p className="text-md font-semibold line-through ml-2 text-gray-600">
                ${price}
              </p> */}
            </Box>
          ) : (
            <Box>
              <p className="text-md font-semibold  text-[#0C1734]">
                {/* ${price} */}
              </p>
            </Box>
          )}
        </Stack>
      </Box>
    </Stack>
  );
};

export default ProductCard;

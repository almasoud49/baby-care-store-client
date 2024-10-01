"use client";
import { TProduct } from "@/types/type.global";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CardButton from "./CardButton"; 
import FavoriteIcon from '@mui/icons-material/Favorite';
import SaveIcon from '@mui/icons-material/Bookmark';

const ProductCard = ({ product }: { product: TProduct }) => {
  const { image, discount, title, flashSaleOffer } = product;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Stack
      sx={{
        padding: "10px",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        boxShadow: isHovered
          ? "0 20px 40px rgba(0, 0, 0, 0.2)"
          : "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px",
        "&:hover": {
          transform: "scale(1.05)", // Scale effect on hover
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <Box
        position="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image with additional styling */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Image
            className="w-full h-[250px] object-cover mx-auto"
            src={image}
            width={200}
            height={200}
            alt="Product Image"
          />
          {/* Gradient Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1))",
              borderRadius: "10px",
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />
        </Box>

        {/* Discount Badge */}
        {discount && (
          <Box
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "#ff4081",
              color: "#fff",
              padding: "5px 10px",
              borderRadius: "20px",
              fontWeight: "bold",
              textAlign: "center",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            {discount}
          </Box>
        )}

        {/* Save & Like Icons that appear on hover */}
        {isHovered && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              right: 10,
              transform: "translateY(-50%)",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderRadius: "50%",
                padding: "8px",
                cursor: "pointer",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              <FavoriteIcon sx={{ color: "#ff4081" }} />
            </Box>
            <Box
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                borderRadius: "50%",
                padding: "8px",
                cursor: "pointer",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              <SaveIcon sx={{ color: "#00aaff" }} />
            </Box>
          </Box>
        )}
      </Box>

      {/* Product Title and Price */}
      <Box sx={{ flexGrow: 1, paddingY: "10px" }}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            color: "#363636",
            textShadow: "1px 1px 2px rgba(255, 255, 255, 0.7)", // Text shadow
          }}
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
              {/* Uncomment to display price details */}
              {/* <p className="text-md font-semibold text-[#0C1734]">${flashSaleOffer}</p> */}
              {/* <p className="text-md font-semibold line-through ml-2 text-gray-600">${price}</p> */}
            </Box>
          ) : (
            <Box>
              <p className="text-md font-semibold text-[#0C1734]">
                {/* Uncomment to display price */}
                {/* ${price} */}
              </p>
            </Box>
          )}
        </Stack>
      </Box>

      {/* Buttons that are always displayed under the title */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          paddingBottom: "10px",
        }}
      >
        {/* Add to Cart Button (CardButton component) */}
        <CardButton product={product} />

        {/* Details Button */}
        <Link href={`/products/${product._id}`}>
          <Button
            variant="outlined"
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
              // width: "200px",
              // padding: "15px 0",
              // borderRadius: "9999px",
              backgroundColor: "#4285F4",
              color: "#FFFFFF", 
              "&:hover": {
                  backgroundColor: "#4285F4", 
              },
          }}
          >
            Details
          </Button>
        </Link>
      </Box>
    </Stack>
  );
};

export default ProductCard;



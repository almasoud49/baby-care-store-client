/* eslint-disable @typescript-eslint/no-unused-vars */

import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import Link from "next/link"; 

interface TProduct {
  title: string;
  image: string;
  id: string;
}

const ChildFoodCard = ({ product }: { product: TProduct }) => {
  const { image, title, } = product; 
  const [isHovered, setIsHovered] = useState(false); 

  return (
    <Card
      sx={{
        position: "relative",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={`${title} Image`}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        {/* Always shown buttons under the title */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 1, 
          }}
        >
          {/* Add to Cart Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{
               
                padding: "12px 5px",
                backgroundColor: "transparent",
                border: "1px solid #0077FF",
                color: "#0077FF",
                
                "&:hover": {
                  backgroundColor: "#0077FF",
                  color: "#fff",
                },
              }}
          >
            Add to Cart
          </Button>

          {/* Details Button */}
          <Link href={`/products`}>
            <Button
              variant="outlined"
              sx={{
                width: "200px",
                padding: "15px 0",
                
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
      </CardContent>
    </Card>
  );
};

export default ChildFoodCard;



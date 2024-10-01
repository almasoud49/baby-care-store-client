import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SaveIcon from '@mui/icons-material/Bookmark';
import Image from "next/image";

interface TProduct {
  title: string;
  image: string;
  id: string;
}

const ChildFoodCard = ({ product }: { product: TProduct }) => {
  const { image, title } = product;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      sx={{
        position: "relative",
        padding: "10px",
        borderRadius: "10px",
        transition: "transform 0.3s, box-shadow 0.3s",
        boxShadow: isHovered
          ? "0 20px 40px rgba(0, 0, 0, 0.2)"
          : "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
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
          alt={`${title} Image`}
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
          {/* Like Icon */}
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

          {/* Save Icon */}
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

      {/* Content Section */}
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        {/* Add to Cart & Details Buttons */}
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
            sx={{
                
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

          {/* Details Button */}
          <Link href={`/products`}>
            <Button
              variant="outlined"
              sx={{
                width: "75px",
                // padding: "15px 0",
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

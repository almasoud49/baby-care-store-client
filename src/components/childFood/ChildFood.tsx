"use client"; 
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ChildFoodCard from "./ChildFoodCard"; 
import { getAllChildFoodData } from "@/data/ChildFoodData";



const ChildFood = () => {
  // Fetch child food data
  const childFoodData = getAllChildFoodData();

  return (
    <Container>
        <Box sx={{ padding: "20px" }}>
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        Child Food Products
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, 
          gap: 2,
        }}
      >
        {childFoodData.map((product) => (
          <ChildFoodCard key={product.id} product={product} /> 
        ))}
      </Box>
    </Box>
    </Container>
  );
};

export default ChildFood;

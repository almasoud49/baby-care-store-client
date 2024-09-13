import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const FILinks = () => {
  return (
    <Stack color="#fff">
      <Typography
        sx={{ fontSize: "20px", fontWeight: "700", marginBottom: "15px" }}
      >
        Important Pages
      </Typography>
      <Box display="flex" flexDirection="column" gap={1} fontSize="16px" fontWeight="400">
        <Link href="/products">Trending Products</Link>
        <Link href="/categories">Categories/Brands</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/contact-us">Contact Us</Link>
        <Link href="/customer-care">Customer Care</Link>
      </Box>
    </Stack>
  );
};

export default FILinks;
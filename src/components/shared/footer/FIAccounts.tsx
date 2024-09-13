import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const FIAccounts = () => {
  return (
    <Stack color="#fff">
      <Typography
        sx={{ fontSize: "20px", fontWeight: "700", marginBottom: "15px" }}
      >
        Account Info
      </Typography>
      <Box display="flex" flexDirection="column" gap={1} fontSize="16px" fontWeight="400" >
        <Link href="/">My Account</Link>
        <Link href="/">My Orders</Link>
        <Link href="/">Returns</Link>
        <Link href="/">Shipping</Link>
        <Link href="/">Wishlist</Link>
      </Box>
    </Stack>
  );
};

export default FIAccounts;
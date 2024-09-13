import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const FIInformationLinks = () => {
  return (
    <Stack color="#fff">
      <Typography
        sx={{ fontSize: "20px", fontWeight: "700", marginBottom: "15px" }}
      >
        Important Info
      </Typography>
      <Box display="flex" flexDirection="column" gap={1} fontSize="16px" fontWeight="400">
        <Link href="/">Delivery Information</Link>
        <Link href="/">Sales</Link>
        <Link href="/">Terms & Conditions</Link>
        <Link href="/">Returns Policy</Link>
        <Link href="/">Reedem Codes</Link>
      </Box>
    </Stack>
  );
};

export default FIInformationLinks;
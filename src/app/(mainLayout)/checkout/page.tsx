"use client";
import BillingDetails from "@/components/checkout/checkout/BillingDetails";
import CheckoutTotal from "@/components/checkout/checkout/CheckoutTotal";
import Info from "@/components/checkout/checkout/Info";
import { Box, Container, Grid, Typography } from "@mui/material";


const CheckoutPage = () => {
  return (
<Container>
      <Box marginTop={5}>
        <Typography fontSize={25} fontWeight={600} marginBottom={2}>
          Checkout
        </Typography>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={8}>
            <Info />
            <BillingDetails />
          </Grid>
          <Grid item xs={4}>
            <CheckoutTotal />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CheckoutPage;
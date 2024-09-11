import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import OrderInfo from '@/components/checkout/order/OrderInfo';
import OrderDetails from '@/components/checkout/order/OrderDetails';
import BillingAddress from '@/components/checkout/order/BillingAddress';

const OrderReceivedPage = () => {
    return (
<Container>
      <Box marginTop={4}>
        <Typography>Thank you. Your order has been received.</Typography>
        <OrderInfo />
        <OrderDetails />
        <BillingAddress />
      </Box>
    </Container>
    );
};

export default OrderReceivedPage;
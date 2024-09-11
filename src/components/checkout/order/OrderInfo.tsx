import { Box, Stack, Typography } from "@mui/material";

const OrderInfo = () => {
    return (
<Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "15px 0",
        border: "1px dashed #c1c1c1",
        padding: "25px",
        borderRadius: "5px",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography>Order ID:</Typography>
        <Typography fontWeight={600}>0385</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography>Date:</Typography>
        <Typography fontWeight={600}>September 14, 2024</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography>Email:</Typography>
        <Typography fontWeight={600}>almasoud49@gmail.com</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography>Total:</Typography>
        <Typography fontWeight={600}>266.86 TK</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography>Payment Method:</Typography>
        <Typography fontWeight={600}>Cash on delivery</Typography>
      </Box>
    </Stack>
    );
};

export default OrderInfo;

import {
    Box,
    Button,
    Divider,
    FormControlLabel,
    Radio,
    Stack,
    Tooltip,
    Typography,
  } from "@mui/material";
  import ClearIcon from "@mui/icons-material/Clear";
  import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentCartData } from "@/redux/features/cart/cartSlice";


const CheckoutTotal = () => {

    const cartData = useAppSelector(useCurrentCartData);
   
    const subTotal = cartData.reduce((total, item) => {
        const price = parseFloat(item.price);
        const quantity = item.quantity; 
      
        if (!isNaN(price) && price >= 0 && quantity > 0) {
          return total + price * quantity;
        }
        return total;
      }, 0);
    
      const fixedSubTotal = subTotal.toFixed(2);
      const shippingRate = 15;
      const totalAmount = (subTotal + shippingRate).toFixed(2);

    return (
 <Box
      sx={{
        border: "1px dashed #c1c1c1",
        padding: "15px",
        borderRadius: "5px",
      }}
    >
      <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
        Your Order
      </Typography>

      <Stack
        marginTop="10px"
        marginBottom="5px"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Typography fontWeight={600}>Product</Typography>
        <Typography fontWeight={600}>Subtotal</Typography>
      </Stack>
      <Divider></Divider>
      <Box>
        {cartData.map((item, index) => (
          <Stack
            key={index}
            sx={{
              borderBottom: "1px dashed #c1c1c1",
              margin: "10px 0",
            }}
          >
            <Box
              marginBottom={1}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography fontSize={15}>{item.title}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  <ClearIcon sx={{ fontSize: 15, cursor: "pointer" }} />
                  <Typography fontSize={15} fontWeight={600} marginLeft="5px">
                    {item.quantity}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Typography fontWeight={600}>
                  {" "}
                 $ {(parseFloat(item.price) * item.quantity).toFixed(2)} 
                </Typography>
              </Box>
            </Box>
          </Stack>
        ))}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography fontWeight={600}>Subtotal</Typography>
          <Typography fontWeight={600}>$ {fixedSubTotal}</Typography>
        </Box>
      </Box>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0",
        }}
      >
        <Typography>Estimated Shipping</Typography>
        <Typography fontWeight={600}>$ 15</Typography>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0",
        }}
      >
        <Typography>Total</Typography>
        <Typography fontWeight={600}>$ {totalAmount} </Typography>
      </Stack>
      <Box>
        <Tooltip title="Pay with cash upon delivery." arrow placement="top-end">
          <FormControlLabel
            value="end"
            control={<Radio size="small" color="warning" checked />}
            label="Cash on delivery"
          />
        </Tooltip>
      </Box>
      <Box
        component={Link}
        href="/checkout/order-received"
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Button
          fullWidth
          sx={{
            padding: "12px 0",
            backgroundColor: "#EF4444",
            "&:hover": {
              backgroundColor: "#EF4444",
            },
          }}
          variant="contained"
        >
          Place Order
        </Button>
      </Box>
    </Box>
    );
};

export default CheckoutTotal;
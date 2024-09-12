"use client";
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentCartData } from "@/redux/features/cart/cartSlice";



const OrderDetails = () => {

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
<Stack>
      <Typography fontSize={25} fontWeight={600} margin="20px 0">
        Order details
      </Typography>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 450 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartData.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <Typography>{item.title}</Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          marginLeft: "10px",
                        }}
                      >
                        <CloseIcon sx={{ fontSize: 15 }} />
                        <Typography fontWeight={600}>
                          {item.quantity}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontWeight: "600" }}>
                    $ {(parseFloat(item.price) * item.quantity).toFixed(2)} 
                  </TableCell>
                </TableRow>
              ))}
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography fontWeight={600}>Subtotal:</Typography>
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }}>
                  $ {fixedSubTotal}
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography fontWeight={600}>Shipping:</Typography>
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }}>$ 15 </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography fontWeight={600}>Payment Method:</Typography>
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }}>
                  <Typography>Cash on delivery</Typography>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography fontWeight={600}>Total:</Typography>
                </TableCell>
                <TableCell sx={{ fontWeight: "600" }}>
                  $ {totalAmount} 
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Stack>
    );
};

export default OrderDetails;
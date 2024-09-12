import {
    Container,
    Divider,
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import Paper from "@mui/material/Paper";
  import EditIcon from "@mui/icons-material/Edit";
  import VisibilityIcon from "@mui/icons-material/Visibility";
  import DeleteIcon from "@mui/icons-material/Delete";
  import { TOrder } from "@/types/type.global";

const OrderPage = async () => {
    const res = await fetch(
        "http://localhost:5000/api/orders",
        {
          cache: "no-store",
        }
      );
      const order = await res.json();

    return (
        <div>
            <Container>
      <Typography fontSize={20} fontWeight={600} marginBottom="5px">
        Orders List
      </Typography>
      <Divider></Divider>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order ID</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Payment Type</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.data.map((item: TOrder) => (
                <TableRow
                  key={item._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{item._id}</TableCell>
                  <TableCell>{item.product}</TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.payment}</TableCell>
                  <TableCell
                    style={{
                      color:
                        item.status === "Pending"
                          ? "#FF5733"
                          : item.status === "Delivered"
                          ? "#007bff"
                          : "",
                    }}
                  >
                    {item.status}
                  </TableCell>
                  <TableCell>
                    <VisibilityIcon sx={{ fontSize: 20, color: "#363636" }} />
                    <EditIcon
                      sx={{ fontSize: 20, color: "#007bff", mx: "5px" }}
                    />
                    <DeleteIcon sx={{ fontSize: 20, color: "#FE4444" }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
        </div>
    );
};

export default OrderPage;
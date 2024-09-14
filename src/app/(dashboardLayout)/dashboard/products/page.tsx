import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Link from "next/link";
import { TProduct } from "@/types/type.global";

const AllProductsPage = async () => {
  const res = await fetch(
    "https://baby-care-store-server-one.vercel.app/api/products",
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <div>
      <h1 className="text-2xl font-semibold">All Products</h1>
      <div className="my-5">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>SL No</TableCell>
                <TableCell>Items</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.data.map((item: TProduct, index: number) => (
                <TableRow
                  key={item._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    <div className=" flex items-center">
                      <Image
                        className=" border rounded-md p-1 mr-2"
                        src={item.image}
                        width={50}
                        height={50}
                        alt="Product Image"
                      />
                      <p className="text-md font-semibold">{item.title}</p>
                    </div>
                  </TableCell>
                  <TableCell>{item.brand}</TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>
                    <Stack
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <Box
                        component={Link}
                        href={`/dashboard/products/${item._id}`}
                      >
                        <EditNoteIcon sx={{ fontSize: 25 }} />
                      </Box>
                      <Box>
                        <DeleteForeverIcon
                          sx={{ fontSize: 25, color: "#FE4444" }}
                        />
                      </Box>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AllProductsPage;

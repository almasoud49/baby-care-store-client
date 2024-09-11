import { TProduct } from "@/types/type.global";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import InfoIcon from "@mui/icons-material/Info";
import CardButton from "./CardButton";


const ProductCard = ({ product }: {product:TProduct}) => {
  const { image, discount, title, flashSaleOffer, price } = product;
  return (
    <div>
      <Stack
        sx={{
          padding: "10px",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
          borderRadius: "10px",
        }}
      >
        <Box position="relative">
        <Image
          className="w-full h-[250px] object-cover mx-auto p-3 relative"
          src={image}
          width={200}
          height={200}
          alt="Product Image"
        />
        <p className={`${
            discount
              ? "absolute top-0 right-0 p-1  text-[14px] text-center text-white bg-red-500  w-[40px] h-[30px] rounded-lg"
              : ""
          }`}>
             {`${discount ? discount : ""}`}
        </p>
        </Box>
        <Box>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "bold", color: "#363636" }}
        >
          {title}
        </Typography>
        <Stack display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between">

            {
                flashSaleOffer ? (
                    <Box display="flex" alignItems="center">
                      <p className="text-md font-semibold text-[#0C1734]">
                        ${flashSaleOffer}
                      </p>
                      <p className="text-md font-semibold line-through ml-2 text-gray-600">
                        ${price}
                      </p>
                    </Box>
                  ):(
                    <Box>
                    <p className="text-md font-semibold  text-[#0C1734]">
                      ${price}
                    </p>
                  </Box>
                  )}
                 <Stack display="flex" flexDirection="row">
            <Box>
              <CardButton product={product} />
            </Box>
            <Link href={`/products/${product._id}`}>
              <InfoIcon sx={{ fontSize: 25, color: "#0C1734" }} />
            </Link>
          </Stack>

        </Stack>
        </Box>
      </Stack>
      
    </div>
  );
};

export default ProductCard;

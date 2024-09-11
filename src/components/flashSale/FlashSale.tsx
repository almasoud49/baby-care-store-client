import { TProduct } from "@/types/type.global";
import React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/utils/actions/ProductCard";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/api/products", {
    next: {
      revalidate: 30,
    },
  });

  const flashSaleData = await res.json();
  console.log(flashSaleData)
  const filterFlashSaleData = flashSaleData?.data?.filter(
    (item: TProduct) => item.flashSale);
    // console.log(filterFlashSaleData)
  return (
    <Container>
      <Stack
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        marginTop="60px"
        marginBottom="40px"
      >
                <Typography
          sx={{ fontSize: "22px", fontWeight: "bold", color: "#0C1734" }}
        >
          Flash Sale
        </Typography>
        <Button component={Link} href="/flash-sale">
          View All <ChevronRight size={20} />{" "}
        </Button>
      </Stack>

      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
        {
            filterFlashSaleData.slice(0, 4).map((product: TProduct)=>(
                <ProductCard key={product._id} product={product}/>
            ))
        }
      </div>
    </Container>
  );
};

export default FlashSale;

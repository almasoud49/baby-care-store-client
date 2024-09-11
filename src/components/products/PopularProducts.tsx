import React from "react";
import { Button, Container, Stack } from "@mui/material";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/utils/actions/ProductCard";
import { TProduct } from "@/types/type.global";

const PopularProducts = async () => {
  const res = await fetch("http://localhost:5000/api/products", {
    next: {
      revalidate: 30,
    },
  });

  const data = await res.json();
  return (
    <div>
      <Container>
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <h1 className="text-xl lg:text-2xl font-semibold text-[#0C1734]">
            Popular Products
          </h1>
          <Button
            component={Link}
            href="/products"
            size="large"
            sx={{ fontSize: "14px" }}
          >
            View All <ChevronRight size={18} />
          </Button>
        </Stack>
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 mx-auto mt-10">
          {data?.data?.slice(0, 8).map((product: TProduct) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PopularProducts;

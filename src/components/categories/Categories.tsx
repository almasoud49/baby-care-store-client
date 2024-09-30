import { TProduct } from "@/types/type.global";
import React from "react";
import { Button, Container } from "@mui/material";
import CategoriesCard from "@/utils/actions/CategoriesCard";
import Link from "next/link";

const Categories = async () => {

  const res = await fetch(
    `${process.env.SERVER_URL}/api/products`
  );

  const data = await res.json();
  const categoryData = data?.data?.filter((item: TProduct) => item.category);

  return (
 
    <div className="my-20">
      <Container>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-[#0C1734]">
            Top Categories
          </h1>
          <p className=" text-lg font-light">
            Discover top baby care essentials for every stage of parenthood.
          </p>
        </div>
       
        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-3xl mx-auto mt-8">
          {categoryData.slice(0, 8).map((category: TProduct) => (
            <CategoriesCard category={category} key={category._id} />
          ))}
        </div>
        <div className="flex items-center justify-center mx-auto mt-10">
      <Button
        component={Link}
        href="/products"
        size="large"
        variant="contained" 
        sx={{
          backgroundColor: "#12354a", 
          color: "#ffffff", 
          borderRadius: "20px", 
          textTransform: "uppercase", 
          padding: "10px 20px", 
          "&:hover": {
            backgroundColor: "#12354a", 
          },
        }}
      >
        View All 
      </Button>
    </div>
      </Container>
    </div>
  );
};

export default Categories;

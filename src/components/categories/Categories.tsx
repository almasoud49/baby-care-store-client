import { TProduct } from "@/types/type.global";
import React from "react";
import { Button, Container } from "@mui/material";
import CategoriesCard from "@/utils/actions/CategoriesCard";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Categories = async () => {
  const res = await fetch(
    "https://baby-care-store-server-one.vercel.app/api/products"
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
        <div className=" flex items-center justify-center mx-auto mt-10">
          <Button component={Link} href="/products" size="large">
            View All <ChevronRight size={20} />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Categories;

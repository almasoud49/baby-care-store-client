import { TProduct } from "@/types/type.global";
import React from "react";
import { Container } from "@mui/material";
import CategoriesCard from "@/utils/actions/CategoriesCard";


const Categories = async () => {

  const res = await fetch(
    `${process.env.SERVER_URL}/api/products`
  );

  const data = await res.json();
  const categoryData = data?.data?.filter((item: TProduct) => item.category);

  return (
 
    <div className="my-20">
      <Container>
        <div className="">
          <h1 className="text-2xl font-semibold text-[#0C1734]">
            Top Categories
          </h1>
          <p className=" text-lg font-light">
            Discover top baby care essentials for every stage of parenthood.
          </p>
        </div>
       
        <div className=" grid grid-cols-2 lg:grid-cols-6 gap-2 max-w-6xl mx-auto mt-8">
          {categoryData.slice(0, 8).map((category: TProduct) => (
            <CategoriesCard category={category} key={category._id} />
          ))}
        </div>
        <div className="flex items-center justify-center mx-auto mt-10">
      {/* <Button
        component={Link}
        href="/products"
        size="large"
        variant="contained" 
        // sx={{
        //   backgroundColor: "#12354a", 
        //   color: "#ffffff", 
        //   borderRadius: "20px", 
        //   textTransform: "uppercase", 
        //   padding: "10px 20px", 
        //   "&:hover": {
        //     backgroundColor: "#12354a", 
        //   },
        // }}
        sx={{
          margin: "10px 0px",
          padding: "10px 20px",
          backgroundColor: "transparent",
          border: "1px solid #0077FF",
          color: "#0077FF",
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: "#0077FF",
            color: "#fff",
          },
        }}
      >
        View All 
      </Button> */}
    </div>
      </Container>
    </div>
  );
};

export default Categories;

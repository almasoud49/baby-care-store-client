import { TProduct } from "@/types/type.global";
import React from "react";
import { Container } from "@mui/material";
import ProductCard from "@/utils/actions/ProductCard";

const FlashSalePage = async () => {
  const res = await fetch("http://localhost:5000/api/products");

  const data = await res.json();
  const filterData = data?.data?.filter((item: TProduct) => item.flashSale);
  return (
    <Container>
      <div className=" flex items-center justify-between my-5">
        <p className=" text-2xl lg:text-3xl font-semibold text-gray-600">
          Flash Sale
        </p>
        <p className="text-lg font-semibold text-gray-600">
          Showing <span className="text-red-500">1-7</span> of{" "}
          <span className="text-[#1949C9]">7</span> Items
        </p>
      </div>
      <div className="flex items-center justify-evenly flex-col lg:flex-row gap-4 lg:gap-0 bg-[#0C1734] p-3 rounded-md text-white mb-8">
        <h1 className=" text-2xl font-semibold text-red-500">Flash sale!</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-col mr-3">
            <h1 className="text-lg font-semibold">26</h1>
            <p className="text-md font-medium">Days</p>
          </div>
          <div className="flex items-center flex-col mr-3">
            <h1 className="text-lg font-semibold">13</h1>
            <p className="text-md font-medium">Hours</p>
          </div>
          <div className="flex items-center flex-col mr-3">
            <h1 className="text-lg font-semibold">09</h1>
            <p className="text-md font-medium">Minutes</p>
          </div>
          <div className="flex items-center flex-col mr-3">
            <h1 className="text-lg font-semibold">13</h1>
            <p className="text-md font-medium">Seconds</p>
          </div>
        </div>
        <p className="text-lg font-semibold text-red-500">Hurry up!</p>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
        {filterData.map((product: TProduct) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </Container>
  );
};

export default FlashSalePage;

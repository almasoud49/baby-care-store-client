"use client"
import { TProduct } from "@/types/type.global";
import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import ProductCard from "@/utils/actions/ProductCard";

const FlashSalePage = () => {
  const [filterData, setFilterData] = useState<TProduct[]>([]);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      const filtered = data?.data?.filter((item: TProduct) => item.flashSale);
      setFilterData(filtered);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const endTime = new Date("2024-09-30T23:59:59"); 

    const updateCountdown = () => {
      const now = new Date();
      const timeLeft = endTime.getTime() - now.getTime();

      if (timeLeft <= 0) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown(); 
    const intervalId = setInterval(updateCountdown, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <Container>
      <div className="flex items-center justify-between my-5">
        <p className="text-2xl lg:text-3xl font-semibold text-gray-600">
          Flash Sale
        </p>
        <p className="text-lg font-semibold text-gray-600">
          Showing <span className="text-red-500">1-7</span> of{" "}
          <span className="text-[#1949C9]">7</span> Items
        </p>
      </div>
      <div className="flex items-center justify-evenly flex-col lg:flex-row gap-4 lg:gap-0 bg-[#0C1734] p-3 rounded-md text-white mb-8">
        <h1 className="text-2xl font-semibold text-red-500">Flash sale!</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-col mr-3">
            <h1 className="text-lg font-semibold">{countdown.days}</h1>
            <p className="text-md font-medium">Days</p>
          </div>
          <div className="flex items-center flex-col mr-3">
            <h1 className="text-lg font-semibold">{countdown.hours}</h1>
            <p className="text-md font-medium">Hours</p>
          </div>
          <div className="flex items-center flex-col mr-3">
            <h1 className="text-lg font-semibold">{countdown.minutes}</h1>
            <p className="text-md font-medium">Minutes</p>
          </div>
          <div className="flex items-center flex-col mr-3">
            <h1 className="text-lg font-semibold">{countdown.seconds}</h1>
            <p className="text-md font-medium">Seconds</p>
          </div>
        </div>
        <p className="text-lg font-semibold text-red-500">Hurry up!</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
        {filterData.map((product: TProduct) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </Container>
  );
};

export default FlashSalePage;


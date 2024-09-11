import { TProduct } from '@/types/type.global';
import ProductCard from '@/utils/actions/ProductCard';
import React from 'react';

const Products = async() => {

    const res = await fetch("http://localhost:5000/api/products", {cache:'no-cache'})
    const productsData = await res.json();
    console.log(productsData)

    return (
        <div className="ml-0 lg:ml-4 mt-5 lg:mt-0">
            <div className=" flex items-center justify-between mb-5">
            <p className=" text-xl font-semibold text-[#0C1734]">
          Our Collection of Products
        </p>
        <p className="text-lg font-semibold text-gray-600">
          Showing <span className="text-red-500">1-15</span> of{" "}
          <span className="text-[#0C1734]">15</span> Items
        </p>
            </div>
            <div className=" grid grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
            {
                productsData?.data?.map((product: TProduct)=>(
                    <ProductCard product={product} key={product._id}/>
                ))
            }
            </div>
            
        </div>
    );
};

export default Products;
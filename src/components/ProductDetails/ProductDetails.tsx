import React from "react";
import Image from "next/image";
import {
  CircleCheckBig,
  Grape,
  HeartCrack,
  Package,
  Rss,
  Sprout,
  TreePalm,
} from "lucide-react";
import { TProduct } from "@/types/type.global";

const ProductDetails = ({ product }: { product: TProduct }) => {
  return (
    <div className="mt-8">
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-semibold uppercase">
          We care for your child always
        </h1>
        <p className="text-md lg:text-lg font-medium">
          Nutrition for you and your little one at every age
        </p>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 my-12">
        <div>
          <Image
            className="w-full h-[400px] object-cover"
            src={product.image}
            width={500}
            height={500}
            alt="Diapers Image"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 place-content-center">
          <div className=" flex items-center justify-center flex-col text-center shadow p-5 rounded-md">
            <HeartCrack size={30} color="#363636" />
            <p className="text-md font-light mt-2">
              We care about the health and proper development of your child
            </p>
          </div>
          <div className=" flex items-center justify-center flex-col text-center shadow p-5 rounded-md">
            <Sprout size={30} color="#363636" />
            <p className="text-md font-light mt-2">
              The best quality natural ingredients
            </p>
          </div>
          <div className=" flex items-center justify-center flex-col text-center shadow p-5 rounded-md">
            <Grape size={30} color="#363636" />
            <p className="text-md font-light mt-2">
              Flavor of forest fruits, carrots or apples to choose from
            </p>
          </div>
          <div className=" flex items-center justify-center flex-col text-center shadow p-5 rounded-md">
            <Package size={30} color="#363636" />
            <p className="text-md font-light mt-2">
              Sterile packaging for the highest value
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center">
          <h1 className=" text-[#0C1734] text-lg font-light italic">
            {product.description}
          </h1>
        </div>
        <div className="mt-5">
          <div className="flex items-start lg:items-center">
            <Rss size={20} />
            <p className="text-md text-gray-700 ml-2">
              Join our newsletter and get $20 discount for your first order
            </p>
          </div>

          <div className="flex items-center my-2">
            <TreePalm size={20} />
            <p className="text-md text-gray-700 ml-2">Only natural products</p>
          </div>
          <div className="flex items-center">
            <CircleCheckBig size={20} />
            <p className="text-md text-gray-700 ml-2">Proven results</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

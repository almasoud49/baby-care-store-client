"use client";
import React from 'react';

import Cream from  "../../assets/images/baby-collection.jpg"
import Power from  "../../assets/images/baby-element.jpg"
import Shampoo from  "../../assets/images/colourful-collection.jpg"
import Bottle from  "../../assets/images/pink-toys.jpg"

import Image from "next/image";
import { TProduct } from '@/types/type.global';

const ProductImageSlide = ({ product }:{ product:TProduct }) => {
    return (
<div className="flex items-center">
      <div>
        <Image src={Cream} width={100} height={100} alt="Cream Image" />
        <Image src={Power} width={100} height={100} alt="Powder Image" />
        <Image
          src={Shampoo}
          width={100}
          height={100}
          alt="Shampoo Image"
        />
        <Image src={Bottle} width={100} height={100} alt="Bottle Image" />
      </div>
      <div>
        <Image
          src={product.image}
          width={400}
          height={400}
          alt="Image"
        />
      </div>
    </div>
    );
};

export default ProductImageSlide;
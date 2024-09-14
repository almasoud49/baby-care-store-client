"use client";

import { TProduct } from "@/types/type.global";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import ProductSpecification from "./ProductSpecification";
import ProductReviews from "./ProductReviews";

const ProductDescription = ({product}:{product:TProduct}) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
<Stack>
      <Box sx={{ width: "100%", bgcolor: "#0C1734", borderRadius: "5px" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab sx={{ color: "#fff" }} label="Description" />
          <Tab sx={{ color: "#fff" }} label="Specification" />
          <Tab sx={{ color: "#fff" }} label="Reviews (0) " />
        </Tabs>
      </Box>
      <Box>
        {value === 0 && <ProductDetails product={product} />}
        {value === 1 && <ProductSpecification />}
        {value === 2 && <ProductReviews productId={""} />}
      </Box>
    </Stack>
    );
};

export default ProductDescription;
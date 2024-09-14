import { Container, Divider } from "@mui/material";
import React from "react";
import Products from '@/components/products/Products';
import FilterByPrice from "@/components/products/productFiltering/FilterByPrice";
import FilterByCategories from "@/components/products/productFiltering/FilterByCategories";
import FilterByBrand from "@/components/products/productFiltering/FilterByBrand";
import FilterByRating from "@/components/products/productFiltering/FilterByRating";



const ProductsPage = () => {
    return (
        <div>
            <Container>
              
        <div className="grid grid-cols-1 lg:grid-cols-11 my-8">
          
          <div className="lg:col-span-3">
          
            <div className="w-full border p-3 rounded-md mt-8 lg:mt-0">
              
              <FilterByPrice />
              <Divider sx={{ margin: "25px 0" }} />
              <FilterByCategories />
              <Divider sx={{ margin: "25px 0" }} />
              <FilterByBrand />
              <Divider sx={{ margin: "25px 0" }} />
              <FilterByRating />
            </div>
          </div>
          <div className="lg:col-span-8 ">
            <div className="w-full lg:w-12/12 ">
            
              <Products />
            </div>
          </div>
        </div>
      </Container>
        </div>
    );
};

export default ProductsPage;
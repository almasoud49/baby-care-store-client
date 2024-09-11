import Categories from '@/components/categories/Categories';
import FlashSale from '@/components/flashSale/FlashSale';
// import PopularProducts from '@/components/products/PopularProducts';
import Products from '@/components/products/Products';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <FlashSale/>
            <Categories/>
            <Products/>
            {/* <PopularProducts/> */}
        </div>
    );
};

export default HomePage;
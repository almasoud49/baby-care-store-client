import Categories from '@/components/categories/Categories';
import FlashSale from '@/components/flashSale/FlashSale';
import Products from '@/components/products/Products';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <FlashSale/>
            <Categories/>
            <Products/>
        </div>
    );
};

export default HomePage;
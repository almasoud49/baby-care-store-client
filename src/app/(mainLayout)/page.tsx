import Banner from '@/components/banner/Banner';
import Categories from '@/components/categories/Categories';
import FlashSale from '@/components/flashSale/FlashSale';
import PopularProducts from '@/components/products/PopularProducts';
import React from 'react';

const HomePage = () => {
    return (
        <div>
 
            <Banner/>
            <FlashSale/>
            <Categories/>
            <PopularProducts/>
        </div>
    );
};

export default HomePage;
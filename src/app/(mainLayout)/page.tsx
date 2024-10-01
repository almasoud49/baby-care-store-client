import Banner from '@/components/banner/Banner';
import Carousel from '@/components/banner/Carousel';
import Categories from '@/components/categories/Categories';
import ChildFood from '@/components/childFood/ChildFood';
import FlashSale from '@/components/flashSale/FlashSale';
import PopularProducts from '@/components/products/PopularProducts';
import SubscriptionBanner from '@/components/shared/footer/SubscriptionBanner';
import React from 'react';

const HomePage = () => {
    return (
        <div>
 
            <Banner/>
            <Carousel/>
            <FlashSale/>
            <Categories/>
            <PopularProducts/>
            <ChildFood/>
            <SubscriptionBanner/>
        </div>
    );
};

export default HomePage;
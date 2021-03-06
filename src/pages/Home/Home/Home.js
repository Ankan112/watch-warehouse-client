import React from 'react';
import Footer from '../../Common/Footer/Footer';
// import Header from '../../Common/Header/Header';

import Products from '../Products/Products';
import Review from '../Review/Review';
import Subscribe from '../Subscribe/Subscribe';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>

            <TopBanner></TopBanner>
            <Products></Products>
            <Review></Review>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;
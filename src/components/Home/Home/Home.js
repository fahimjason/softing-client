import React from 'react';
import Footer from '../../Common/Footer/Footer/Footer';
import Review from '../../Review/Review/Review';
import Service from '../../Service/Service/Service';
import Contract from '../Contract/Contract';
import Feature from '../Feature/Feature';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Service />
            <Feature />
            <Review />
            <Contract />
            <Footer />
        </div>
    );
};

export default Home;
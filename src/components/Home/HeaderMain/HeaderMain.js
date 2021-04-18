import React from 'react';
import headerBg from '../../../images/header-bg.png'

const HeaderMain = () => {
    return (

        <main className="container">
            <div className="row p-5 d-flex align-items-center">
                <div className="col-md-6">
                    <h1>We're Building <span style={{ color: '#4eb9e6' }}>Software</span> <br /> For You</h1>
                    <p>Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it without me.</p>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={headerBg} alt="" />
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;
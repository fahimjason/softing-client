import React from 'react';

const FeatureCol = ({ feature }) => {
    return (
        <div className="col-md-6 d-flex justify-content-center p-2">
            <div className="pe-2">
                <div className="p-4 rounded-circle" style={{ height: '100px', width: '100px', backgroundColor: '#edf5ff' }}>
                    <img className="img-fluid" src={feature.icon} alt="" />
                </div>
            </div>
            <div className="ps-2">
                <h5>{feature.title}</h5>
                <p>Dried quick round it or order. Add past see west felt did any. Say out noise you taste merry</p>
            </div>
        </div>
    );
};

export default FeatureCol;
import React from 'react';

const ReviewCard = ({ review }) => {
    return (
        <div className="col-md-4 py-2 d-flex align-items-center">
            <img className="img-fluid rounded-circle" src={review.img} alt="" style={{ width: '60px', height: '60px' }} />
            <div className="ps-3">
                <p>{review.review}</p>
                <h6>{review.user}</h6>
            </div>
        </div>
    );
};

export default ReviewCard;
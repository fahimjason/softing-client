import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import reviewerImg from '../../../images/review.jpg'
import ReviewCard from '../ReviewCard/ReviewCard';

// const reviews = [
//     {
//         name: 'Person name',
//         image: reviewerImg
//     },
//     {
//         name: 'Person name',
//         image: reviewerImg
//     },
//     {
//         name: 'Person name',
//         image: reviewerImg
//     },
//     {
//         name: 'Person name',
//         image: reviewerImg
//     },
// ]

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-beach-52481.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section>
            <div className="container pb-5">
                <h2 className="text-center pb-5">Testimonials</h2>
                <div className="row">
                    {
                        reviews.map(review => <ReviewCard review={review} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Review;
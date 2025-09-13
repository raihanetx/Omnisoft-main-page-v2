
import React from 'react';
import { reviewsData } from '../constants';
import { Review } from '../types';

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<i key={i} className="fas fa-star"></i>);
        } else if (i - 0.5 === rating) {
            stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
        } else {
            stars.push(<i key={i} className="far fa-star"></i>);
        }
    }
    return <div className="text-yellow-400 text-sm">{stars}</div>;
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="flex flex-col bg-white/50 dark:bg-violet-950/40 backdrop-blur-lg border border-slate-200 dark:border-violet-800/60 p-4 sm:p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-violet-500/10 w-60 sm:w-80 md:w-96 mx-2 sm:mx-4 flex-shrink-0">
        <i className="fa-solid fa-quote-left text-violet-500 text-3xl sm:text-4xl opacity-80 mb-3 sm:mb-4"></i>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 flex-grow">{review.text}</p>
        <div className="flex items-center mt-auto">
            <img src={review.img} alt={review.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 bg-slate-700 object-cover" loading="lazy" decoding="async" />
            <div>
                <h3 className="text-base sm:text-lg font-bold">{review.name}</h3>
                <Rating rating={review.rating} />
            </div>
        </div>
    </div>
);

const Reviews: React.FC = () => {
    const firstRow = reviewsData.slice(0, Math.ceil(reviewsData.length / 2));
    const secondRow = reviewsData.slice(Math.ceil(reviewsData.length / 2));

    return (
        <section id="reviews" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">What Our Clients Say</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">See what our satisfied clients say.</p>
                </div>
                 <div className="relative overflow-hidden space-y-8 py-4
                    before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-1/4
                    before:bg-gradient-to-r before:from-slate-50 before:dark:from-[#1a103c] before:to-transparent
                    after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-1/4
                    after:bg-gradient-to-l after:from-slate-50 after:dark:from-[#1a103c] after:to-transparent"
                >
                    <div className="flex animate-scroll">
                        {[...firstRow, ...secondRow, ...firstRow].map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </div>
                    <div className="flex animate-scroll [animation-direction:reverse]">
                        {[...secondRow, ...firstRow, ...secondRow].map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
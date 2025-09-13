
import React from 'react';
import { whyChooseUsData } from '../constants';
import { WhyChooseUsItem } from '../types';

const WhyChooseUsCard: React.FC<{ item: WhyChooseUsItem }> = ({ item }) => (
    <div className="rounded-2xl group bg-white/50 dark:bg-violet-950/40 backdrop-blur-lg p-8 border border-slate-200 dark:border-violet-800/60 flex flex-col justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2 hover:border-violet-500 dark:hover:border-violet-500">
        <div className="relative h-28 w-full flex justify-center items-center mb-6">
            <img src={item.imgSrc} alt={item.title} className="relative z-10 h-24 w-24 object-contain transition-all duration-300 group-hover:-translate-y-2 drop-shadow-xl" loading="lazy" decoding="async" />
            <div className="absolute bottom-4 w-20 h-5 bg-black/40 rounded-full transition-all duration-300 blur-lg group-hover:blur-xl group-hover:w-24"></div>
        </div>
        <div className="w-full text-center">
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
        </div>
    </div>
);


const WhyChooseUs: React.FC = () => {
    return (
        <section id="choose-us" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Why Choose Us</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">Key advantages of partnering with us.</p>
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyChooseUsData.map((item, index) => (
                            <WhyChooseUsCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

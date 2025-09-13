
import React, { useState, useRef } from 'react';
import { faqData } from '../constants';
import { FaqItem as FaqItemType } from '../types';

const FaqItem: React.FC<{ item: FaqItemType; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    return (
        <div className="border-b border-slate-300 dark:border-violet-800/60 py-5">
            <button
                className="w-full flex justify-between items-center text-left text-lg md:text-xl font-semibold text-slate-900 dark:text-white focus:outline-none"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span>{item.question}</span>
                <i className={`fa-solid fa-chevron-down text-xl text-violet-600 dark:text-violet-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
            >
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed pt-4">
                    {item.answer}
                </p>
            </div>
        </div>
    );
};

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">Answers to common questions.</p>
                </div>
                <div className="max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} item={item} isOpen={openIndex === index} onClick={() => handleClick(index)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;


import React from 'react';
import { techStackData } from '../constants';
import { Tech } from '../types';

const TechIcon: React.FC<{ tech: Tech }> = ({ tech }) => (
    <div title={tech.name} className="flex flex-col items-center justify-center gap-2 bg-white/50 dark:bg-violet-950/40 backdrop-blur-lg border border-slate-200 dark:border-violet-800/60 rounded-lg p-3 text-center w-24 h-24 md:w-32 md:h-32 mx-2 md:mx-4 flex-shrink-0">
        <i className={`${tech.iconClass} text-3xl md:text-5xl`}></i>
        <span className="text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">{tech.name}</span>
    </div>
);

const TechStack: React.FC = () => {
    const firstRow = techStackData.slice(0, 6);
    const secondRow = techStackData.slice(6, 12);

    return (
        <section id="tech-stack" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Our Tech Stack</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">Cutting-edge tech for scalable applications.</p>
                </div>
                <div className="relative overflow-hidden space-y-4 py-4
                    before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-1/4
                    before:bg-gradient-to-r before:from-slate-50 before:dark:from-[#1a103c] before:to-transparent
                    after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-1/4
                    after:bg-gradient-to-l after:from-slate-50 after:dark:from-[#1a103c] after:to-transparent"
                >
                    <div className="flex animate-scroll">
                        {[...firstRow, ...secondRow, ...firstRow, ...secondRow].map((tech, index) => (
                            <TechIcon key={index} tech={tech} />
                        ))}
                    </div>
                    <div className="flex animate-scroll [animation-direction:reverse]">
                        {[...secondRow, ...firstRow, ...secondRow, ...firstRow].map((tech, index) => (
                            <TechIcon key={index} tech={tech} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
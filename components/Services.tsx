
import React from 'react';
import { servicesData } from '../constants';
import { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="relative bg-white/50 dark:bg-violet-950/40 backdrop-blur-lg border border-slate-200 dark:border-violet-800/60 rounded-2xl p-6 pt-14 text-center flex flex-col group transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-2 hover:border-violet-500 dark:hover:border-violet-500 h-full">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 border-2 border-white/10 flex items-center justify-center shadow-lg">
            <i className={`${service.iconClass} text-4xl text-white`}></i>
        </div>
        <div className="flex-grow">
            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{service.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.description}</p>
        </div>
        <a href="#" className="flex items-center justify-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 group-hover:text-violet-800 dark:group-hover:text-violet-300 transition-colors mt-6">
            <span>Learn More</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">»</span>
        </a>
    </div>
);

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Our Services</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">We offer a wide range of services to bring your digital vision to life.</p>
                </div>
                <div className="max-w-7xl mx-auto mt-24">
                    <div id="services-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {servicesData.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

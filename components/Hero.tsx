
import React from 'react';

interface HeroProps {
    paddingTop: string;
}

const Hero: React.FC<HeroProps> = ({ paddingTop }) => {
    return (
        <section id="home" className="text-white h-[85vh] md:min-h-screen flex flex-col justify-center items-center overflow-hidden relative" style={{ marginTop: `-${paddingTop}` }}>
            <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1920&auto=format&fit=crop" alt="A developer's desk with multiple monitors displaying lines of code, illustrating a professional development environment." className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="container mx-auto px-6 text-center relative z-20">
                <div>
                    <h1 
                        className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight my-4 animate-fade-in-up text-white" 
                        style={{ animationDelay: '0.2s' }}
                    >
                        omnisoft
                    </h1>
                    <p 
                        className="max-w-3xl mx-auto text-lg md:text-xl text-slate-200 animate-fade-in-up" 
                        style={{ animationDelay: '0.4s' }}
                    >
                        We build robust, scalable, and elegant digital solutions. <br className="hidden sm:block" />Your vision, engineered with precision.
                    </p>
                    <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <a href="#contact" className="bg-violet-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 shadow-violet-500/40">
                            Start a Project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

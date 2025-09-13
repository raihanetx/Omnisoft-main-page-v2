
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { teamData } from '../constants';
import { TeamMember } from '../types';

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="relative group aspect-[4/5] rounded-2xl overflow-hidden shadow-lg w-full transition-shadow duration-300 hover:shadow-2xl hover:shadow-white/10">
        <img src={member.img} alt={member.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-left flex flex-col justify-end h-full">
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-300 font-medium text-sm mt-1">{member.role}</p>
            <p className="text-xs text-gray-300 opacity-90 mt-3">{member.skills.slice(0, 3).join(" • ")}</p>
        </div>
    </div>
);

const getVisibleSlides = () => {
    if (typeof window === 'undefined') return 4;
    return window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 3 : 4;
};


const Team: React.FC = () => {
    const [numVisible, setNumVisible] = useState(getVisibleSlides());
    const [currentIndex, setCurrentIndex] = useState(numVisible);
    const trackRef = useRef<HTMLDivElement>(null);
    const isTransitioning = useRef(false);

    const extendedTeamData = useMemo(() => {
        const startClones = teamData.slice(-numVisible);
        const endClones = teamData.slice(0, numVisible);
        return [...startClones, ...teamData, ...endClones];
    }, [numVisible]);

    const updateCarousel = useCallback((withTransition = true) => {
        if (trackRef.current) {
            trackRef.current.style.transition = withTransition ? 'transform 0.5s ease-in-out' : 'none';
            trackRef.current.style.transform = `translateX(-${currentIndex * (100 / numVisible)}%)`;
        }
    }, [currentIndex, numVisible]);
    
    useEffect(updateCarousel, [updateCarousel]);

    useEffect(() => {
        const handleResize = () => setNumVisible(getVisibleSlides());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    useEffect(() => {
        setCurrentIndex(numVisible);
    }, [numVisible]);

    const handleNext = () => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        setCurrentIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;
        setCurrentIndex(prev => prev - 1);
    };
    
    const handleTransitionEnd = () => {
        isTransitioning.current = false;
        if (currentIndex >= teamData.length + numVisible) {
            setCurrentIndex(numVisible);
        } else if (currentIndex < numVisible) {
            setCurrentIndex(teamData.length + numVisible - 1);
        }
    };
    
    useEffect(() => {
       if (trackRef.current) {
            if (currentIndex === numVisible-1 || currentIndex === teamData.length + numVisible) {
                setTimeout(() => {
                    const newIndex = currentIndex === numVisible-1 ? teamData.length + numVisible - 1 : numVisible;
                    if(trackRef.current){
                         trackRef.current.style.transition = 'none';
                         setCurrentIndex(newIndex);
                    }
                }, 500);
            }
       }
    }, [currentIndex, numVisible, teamData.length]);

    return (
        <section id="team" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Our Team</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">Meet the professionals behind Omnisoft.</p>
                </div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="overflow-hidden" role="region" aria-label="Team Carousel">
                    <div id="team-track" ref={trackRef} className="flex" onTransitionEnd={handleTransitionEnd}>
                        {extendedTeamData.map((member, index) => (
                            <div key={index} className="flex-shrink-0 px-3" style={{ width: `${100 / numVisible}%` }}>
                                <TeamCard member={member} />
                            </div>
                        ))}
                    </div>
                </div>
                <button id="team-prev" onClick={handlePrev} className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-12 z-10 w-12 h-12 rounded-full bg-slate-100/50 dark:bg-violet-950/80 hover:bg-slate-100/80 dark:hover:bg-violet-950/95 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 flex items-center justify-center" aria-label="Previous Members">
                    <i className="fa-solid fa-chevron-left text-xl"></i>
                </button>
                <button id="team-next" onClick={handleNext} className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-12 z-10 w-12 h-12 rounded-full bg-slate-100/50 dark:bg-violet-950/80 hover:bg-slate-100/80 dark:hover:bg-violet-950/95 text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 flex items-center justify-center" aria-label="Next Members">
                    <i className="fa-solid fa-chevron-right text-xl"></i>
                </button>
            </div>
        </section>
    );
};

export default Team;
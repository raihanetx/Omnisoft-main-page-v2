
import React, { useState } from 'react';
import { projectsData } from '../constants';
import { Project } from '../types';

const ProjectSlide: React.FC<{ project: Project }> = ({ project }) => (
    <div className="w-full flex-shrink-0">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
            <div className="relative h-80 md:h-full">
                <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map(tech => (
                        <span key={tech} className="bg-violet-100 text-violet-800 dark:bg-violet-500/20 dark:text-violet-300 text-xs font-medium px-2.5 py-1 rounded-md">{tech}</span>
                    ))}
                </div>
                <div className="flex items-center gap-6">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300 transition group">
                        View Project <span className="transform transition-transform duration-300 group-hover:translate-x-1">»</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const Projects: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % projectsData.length);
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + projectsData.length) % projectsData.length);
    };

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Project Demos</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">Our portfolio of successful solutions.</p>
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="rounded-2xl bg-white/50 dark:bg-violet-950/40 backdrop-blur-lg border border-slate-200 dark:border-violet-800/60 overflow-hidden">
                            <div
                                id="projects-track"
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {projectsData.map((project, index) => (
                                    <ProjectSlide key={index} project={project} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <button id="project-prev" onClick={handlePrev} className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-8 z-10 w-12 h-12 rounded-full bg-slate-100/60 dark:bg-black/30 hover:bg-slate-200 active:bg-slate-300 dark:hover:bg-black/50 dark:active:bg-black/60 text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 flex items-center justify-center" aria-label="Previous Project">
                        <i className="fa-solid fa-chevron-left text-xl"></i>
                    </button>
                    <button id="project-next" onClick={handleNext} className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-8 z-10 w-12 h-12 rounded-full bg-slate-100/60 dark:bg-black/30 hover:bg-slate-200 active:bg-slate-300 dark:hover:bg-black/50 dark:active:bg-black/60 text-slate-600 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 flex items-center justify-center" aria-label="Next Project">
                        <i className="fa-solid fa-chevron-right text-xl"></i>
                    </button>
                </div>
                <div className="text-center mt-12">
                    <a href="#" className="inline-flex items-center gap-2 font-semibold text-violet-600 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300 transition group text-lg">
                        Explore All Projects <span className="transform transition-transform duration-300 group-hover:translate-x-1">»</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
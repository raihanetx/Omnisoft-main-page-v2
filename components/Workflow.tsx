import React from 'react';
import { workflowData } from '../constants';
import { WorkflowStep } from '../types';

const WorkflowStepItem: React.FC<{ step: WorkflowStep }> = ({ step }) => (
    <div className="workflow-step text-center flex-1">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center mb-6 text-white">
            <i className={`${step.iconClass} text-4xl`}></i>
        </div>
        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{step.description}</p>
        {/* FIX: Removed non-standard "jsx" prop from <style> tag to resolve TypeScript error. */}
        <style>{`
            .workflow-step { position: relative; }
            
            @media (min-width: 1024px) {
                .workflow-step:not(:last-child)::after {
                    content: '»'; font-family: 'Poppins', sans-serif; font-weight: 900; position: absolute;
                    top: 2.5rem; right: -2rem; transform: translateY(-50%); color: #a78bfa; font-size: 2rem;
                }
            }

            @media (max-width: 1023px) {
                .workflow-step:not(:first-child)::before {
                    content: ''; position: absolute; left: 50%; transform: translateX(-50%);
                    top: -3rem; height: 3rem; width: 2px;
                    background-image: linear-gradient(to bottom, #8b5cf6 50%, transparent 50%); 
                    background-size: 2px 8px; background-repeat: repeat-y;
                }
            }
        `}</style>
    </div>
);

const Workflow: React.FC = () => {
    return (
        <section id="workflow" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Our Workflow</h2>
                </div>
                <div className="relative flex flex-col lg:flex-row justify-between items-center lg:items-start gap-y-12 lg:gap-x-12">
                    {workflowData.map((step, index) => (
                        <WorkflowStepItem key={index} step={step} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;

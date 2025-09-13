import React from 'react';

interface QuestionModalProps {
    isOpen: boolean;
    onClose: () => void;
    onQuestionSubmit: (message: string) => void;
}

const QuestionModal: React.FC<QuestionModalProps> = ({ isOpen, onClose, onQuestionSubmit }) => {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onQuestionSubmit("Your messages submitted");
        onClose();
    };

    return (
        <div 
            id="question-modal" 
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="bg-slate-100/90 dark:bg-violet-950/90 backdrop-blur-sm border border-slate-200 dark:border-violet-800/60 rounded-2xl p-8 w-full max-w-lg mx-auto relative shadow-2xl shadow-black/40"
                onClick={e => e.stopPropagation()}
            >
                <button 
                    id="close-modal-btn" 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl text-slate-600/70 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors" 
                    aria-label="Close modal"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <h3 className="text-2xl font-bold mb-6 text-center text-slate-900 dark:text-white">Ask a Question</h3>
                <form id="question-form" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Your Name</label>
                            <input type="text" id="name" name="name" required className="w-full bg-white dark:bg-violet-900/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-white/50 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 ring-violet-500/50 border-none" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Your Email</label>
                            <input type="email" id="email" name="email" required className="w-full bg-white dark:bg-violet-900/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-white/50 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 ring-violet-500/50 border-none" />
                        </div>
                        <div>
                            <label htmlFor="question" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Your Question</label>
                            <textarea id="question" name="question" rows={4} required className="w-full bg-white dark:bg-violet-900/50 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-white/50 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 ring-violet-500/50 border-none"></textarea>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <button type="submit" className="bg-violet-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-violet-700 transition-all duration-300 transform hover:scale-105 shadow-violet-600/30 inline-flex items-center gap-2">
                            <i className="fa-solid fa-paper-plane"></i> Submit Question
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuestionModal;
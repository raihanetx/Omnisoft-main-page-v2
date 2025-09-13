import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';

const TypingIndicator: React.FC = () => (
    <div className="self-start animate-message-fade-in-up">
        <div className="message p-2 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center gap-1">
            <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse-dot" style={{animationDelay: '0s'}}></span>
            <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse-dot" style={{animationDelay: '0.2s'}}></span>
            <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse-dot" style={{animationDelay: '0.4s'}}></span>
        </div>
    </div>
);

const useVisualViewport = (isMobile: boolean) => {
    const [viewportHeight, setViewportHeight] = useState(window.visualViewport?.height ?? window.innerHeight);
    const [keyboardPadding, setKeyboardPadding] = useState(0);

    useEffect(() => {
        const visualViewport = window.visualViewport;
        if (!visualViewport || !isMobile) return;

        const handleResize = () => {
            const newHeight = visualViewport.height;
            setViewportHeight(newHeight);
            
            const isKeyboardOpen = window.innerHeight > newHeight + 100;
            
            setKeyboardPadding(isKeyboardOpen ? 80 : 0); // Increased padding
        };
        
        visualViewport.addEventListener('resize', handleResize);
        return () => visualViewport.removeEventListener('resize', handleResize);
    }, [isMobile]);

    return { viewportHeight, keyboardPadding };
};


const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        { text: "Hello! I'm the Omnisoft AI assistant. This is a demo. How can I help you today?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasChatStarted, setHasChatStarted] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatbotWindowRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const { viewportHeight, keyboardPadding } = useVisualViewport(isMobile);

    useEffect(() => {
        if (hasChatStarted) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping, hasChatStarted]);

    useEffect(() => {
        if (isOpen && isMobile) {
            // Timeout ensures the transition is complete before focusing.
            const timer = setTimeout(() => {
                inputRef.current?.focus();
            }, 350);
            return () => clearTimeout(timer);
        }
    }, [isOpen, isMobile]);

    const suggestions = ["What are your services?", "Tell me about your projects", "How can I contact you?"];
    const botResponses: { [key: string]: string } = {
        services: "We offer a wide range of services including UI/UX Design, Web & Mobile App Development, Backend & API Development, Cloud & DevOps, and Graphics & Branding. What are you interested in?",
        projects: "We have worked on various projects like social media platforms, analytics dashboards, and e-commerce storefronts. You can see some demos in our 'Project Demos' section!",
        contact: "You can find our contact details in the footer section of this page. We'd love to hear from you!",
        default: "Thanks for your message! This is a demo chatbot. For a detailed discussion, please use the contact form or details at the bottom of the page."
    };

    const getBotResponse = (userMessage: string): string => {
        const lowerCaseMessage = userMessage.toLowerCase();
        if (lowerCaseMessage.includes('service')) return botResponses.services;
        if (lowerCaseMessage.includes('project')) return botResponses.projects;
        if (lowerCaseMessage.includes('contact')) return botResponses.contact;
        return botResponses.default;
    };

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;
        if (!hasChatStarted) setHasChatStarted(true);

        setMessages(prev => [...prev, { text, sender: 'user' }]);
        setIsTyping(true);

        setTimeout(() => {
            const botResponse = getBotResponse(text);
            setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
            setIsTyping(false);
        }, 1200);
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSendMessage(inputValue);
        setInputValue('');
    };

    const handleSuggestionClick = (suggestion: string) => {
        handleSendMessage(suggestion);
        setInputValue('');
    };
    
    const toggleChatbot = () => {
        const nextState = !isOpen;
        setIsOpen(nextState);
        if (!nextState) {
            setTimeout(() => setHasChatStarted(false), 300);
        }
    };
    
    const chatbotStyle: React.CSSProperties = isMobile && isOpen 
        ? { 
            height: `${viewportHeight}px`, 
            bottom: 0, 
            right: 0, 
            left: 0, 
            borderRadius: 0,
            paddingBottom: `${keyboardPadding}px`
          } 
        : {
            paddingBottom: isMobile ? `${keyboardPadding}px` : '0px'
        };

    return (
        <>
            <div 
                ref={chatbotWindowRef}
                style={chatbotStyle}
                className={`fixed z-[999] bg-white/80 dark:bg-[#1E1B2E]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10
                flex flex-col
                transition-all duration-300 ease-in-out
                ${isOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10 pointer-events-none'}
                sm:w-full sm:max-w-md sm:h-[70vh] sm:max-h-[600px] sm:rounded-xl sm:shadow-2xl sm:bottom-8 sm:right-8`}
            >
                <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-white/10 flex-shrink-0">
                    <div className="flex items-baseline gap-3">
                        <h3 className="font-bold text-slate-900 dark:text-white text-lg">Omnisoft Assistant</h3>
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                            <p className="text-xs text-slate-500 dark:text-slate-400">[Online]</p>
                        </div>
                    </div>
                    <button
                        onClick={toggleChatbot}
                        className="text-2xl text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors"
                        aria-label="Close chat"
                    >
                        <i className="fa-solid fa-times"></i>
                    </button>
                </div>
                
                <div className="flex-grow overflow-y-auto flex flex-col scrollbar-hide">
                    {!hasChatStarted ? (
                        <div className="flex-grow flex flex-col items-center justify-center p-4 text-center">
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Omnisoft Assistant</h2>
                            <p className="text-slate-500 dark:text-slate-400 mt-2">How can I help you today?</p>
                        </div>
                    ) : (
                        <div className="p-4 flex flex-col gap-4">
                             {messages.map((msg, index) => (
                                <div key={index} className={`p-2.5 rounded-2xl max-w-[85%] text-sm animate-message-fade-in-up ${msg.sender === 'user' ? 'bg-violet-600 text-white self-end rounded-br-lg' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 self-start rounded-bl-lg'}`}>
                                    {msg.text}
                                </div>
                            ))}
                            {isTyping && <TypingIndicator />}
                            <div ref={messagesEndRef} />
                        </div>
                    )}
                </div>

                <div className="p-4 border-t border-slate-200 dark:border-white/10 flex-shrink-0 bg-slate-50/50 dark:bg-black/10">
                    <div className="flex items-center gap-2 mb-3 overflow-x-auto pb-2 scrollbar-hide">
                        {suggestions.map((s, i) => (
                            <button key={i} onClick={() => handleSuggestionClick(s)} className="px-3 py-1.5 bg-violet-200/50 dark:bg-violet-500/20 text-violet-800 dark:text-violet-300 text-xs font-medium rounded-full hover:bg-violet-200/80 dark:hover:bg-violet-500/40 transition-colors whitespace-nowrap">
                                {s}
                            </button>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className="flex items-center gap-2">
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type a message..."
                            className="w-full bg-slate-100 dark:bg-slate-700/50 text-slate-900 dark:text-white text-sm placeholder-slate-500 dark:placeholder-slate-400 rounded-full py-2.5 pl-4 pr-4 focus:outline-none focus:ring-2 ring-violet-500 border-none transition-all duration-300"
                            aria-label="Chat input"
                            autoComplete="off"
                        />
                        <button type="submit" className="w-10 h-10 bg-violet-600 rounded-full flex-shrink-0 flex items-center justify-center text-white hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={!inputValue.trim()} aria-label="Send message">
                            <i className="fa-solid fa-paper-plane text-sm"></i>
                        </button>
                    </form>
                </div>
            </div>
            <button
                onClick={toggleChatbot}
                className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[1000] w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-lg transition-all duration-300
                ${isOpen ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100 hover:scale-110 active:scale-100'}`}
                aria-label={"Open chat"}
            >
                <i className={`fa-solid fa-robot text-xl sm:text-2xl`}></i>
            </button>
        </>
    );
};

export default Chatbot;
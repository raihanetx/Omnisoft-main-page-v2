import React, { useState, useEffect, useCallback } from 'react';

const NavLink: React.FC<{ href: string; section: string; activeSection: string; children: React.ReactNode; onClick?: () => void; isMobile?: boolean }> = ({ href, section, activeSection, children, onClick, isMobile = false }) => {
    const isActive = activeSection === section;
    const desktopClasses = `nav-link font-medium whitespace-nowrap transition-colors duration-300 py-2 px-3 rounded-full ${isActive ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-600 dark:text-slate-300'}`;
    const mobileClasses = `mobile-menu-link block py-3 px-4 text-slate-800 dark:text-slate-200 text-left rounded-md hover:bg-black/5 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white`;

    return (
        <a href={href} className={isMobile ? mobileClasses : desktopClasses} data-section={section} onClick={onClick}>
            {children}
        </a>
    );
};

const ThemeToggleButton: React.FC<{ onToggle: () => void; isDark: boolean; isMobile?: boolean }> = ({ onToggle, isDark, isMobile = false }) => {
    const iconClass = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    const label = `Switch to ${isDark ? 'Light' : 'Dark'} Mode`;
    const desktopClasses = "hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-slate-100 dark:bg-violet-900/50 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-violet-900 transition-colors";
    const mobileClasses = "w-full flex items-center justify-between p-3 rounded-md bg-slate-100 dark:bg-violet-900/50 text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-violet-900 transition-colors";

    return (
        <button id={isMobile ? "theme-toggle-mobile" : "theme-toggle-desktop"} onClick={onToggle} className={isMobile ? mobileClasses : desktopClasses} aria-label={label}>
            {isMobile && <span>{label}</span>}
            <i className={`${iconClass} text-lg`}></i>
        </button>
    );
};

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });
    const [activeSection, setActiveSection] = useState('home');

    const handleScroll = useCallback(() => {
        let currentSection = 'home';
        const sections = document.querySelectorAll<HTMLElement>('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 150) {
                currentSection = section.getAttribute('id') || 'home';
            }
        });
        setActiveSection(currentSection);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);
    
    const navItems = [
        { href: "#home", section: "home", label: "Home" },
        { href: "#services", section: "services", label: "Services" },
        { href: "#projects", section: "projects", label: "Projects" },
        { href: "#ai-price-prediction", section: "ai-price-prediction", label: "AI Price Prediction" },
        { href: "#contact", section: "contact", label: "Contact" },
    ];

    return (
        <>
            <header id="main-header" className="fixed top-0 left-0 w-full z-50 py-3 transition-all duration-300 dark:bg-[#1a103c]/85 bg-white/85 backdrop-blur-lg border-b dark:border-white/10 border-slate-900/10">
                <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-3 items-center">
                    <div className="justify-self-start">
                        <a href="#home" className="flex items-center">
                            <span className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">omnisoft</span>
                        </a>
                    </div>
                    <nav id="desktop-nav" className="hidden lg:flex justify-self-center items-center gap-6">
                        {navItems.map(item => <NavLink key={item.section} {...item} activeSection={activeSection}>{item.label}</NavLink>)}
                    </nav>
                    <div className="justify-self-end flex items-center gap-2 md:gap-4">
                        <div className="hidden md:flex items-center relative">
                            <input type="search" placeholder="Search..." className="bg-slate-100 dark:bg-violet-900/50 text-slate-900 dark:text-white text-sm placeholder-slate-500 dark:placeholder-slate-400 rounded-full py-2 pl-4 pr-10 w-80 focus:outline-none focus:ring-2 ring-violet-500/50 border-none transition-all duration-300 pointer-events-none" aria-label="Search" />
                            <i className="fa-solid fa-magnifying-glass text-slate-400 dark:text-slate-400 absolute right-4 top-1/2 -translate-y-1/2"></i>
                        </div>
                        <ThemeToggleButton onToggle={toggleTheme} isDark={isDark} />
                        <div className="lg:hidden">
                            <button id="menu-btn" onClick={toggleMenu} className="text-slate-900 dark:text-white focus:outline-none z-[71] relative" aria-controls="mobile-menu" aria-expanded={isMenuOpen} aria-label="Toggle menu">
                                <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl transition-transform duration-300`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div id="mobile-menu-overlay" onClick={closeMenu} className={`fixed inset-0 bg-black/60 z-[69] transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} aria-hidden="true"></div>
            <div id="mobile-menu" className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-slate-100/95 dark:bg-[#1a103c]/95 backdrop-blur-sm shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-6 border-b border-black/10 dark:border-white/10">
                    <a href="#home" onClick={closeMenu} className="flex items-center mobile-menu-link">
                        <span className="text-2xl font-extrabold text-slate-900 dark:text-white">omnisoft</span>
                    </a>
                </div>
                <nav className="p-4 flex flex-col">
                    {navItems.map(item => <NavLink key={item.section} {...item} activeSection={activeSection} onClick={closeMenu} isMobile>{item.label}</NavLink>)}
                    <div className="p-4 mt-4 border-t border-black/10 dark:border-white/10">
                        <ThemeToggleButton onToggle={toggleTheme} isDark={isDark} isMobile />
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
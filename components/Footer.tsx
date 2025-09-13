import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-slate-100 dark:bg-[#1a103c] pt-20 pb-8 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">omnisoft</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-xs">Crafting smart, scalable, and future-ready digital solutions.</p>
                        <div className="flex gap-3">
                            <a href="#" aria-label="Facebook" className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center text-white hover:bg-violet-700 transition-colors"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Github" className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center text-white hover:bg-violet-700 transition-colors"><i className="fab fa-github"></i></a>
                            <a href="#" aria-label="Twitter" className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center text-white hover:bg-violet-700 transition-colors"><i className="fab fa-x-twitter"></i></a>
                            <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-violet-600 rounded-full flex items-center justify-center text-white hover:bg-violet-700 transition-colors"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-5 text-slate-900 dark:text-white">Useful Links</h4>
                        <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                            <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">About us</a></li>
                            <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">New & Articles</a></li>
                            <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Legal Notice</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-5 text-slate-900 dark:text-white">Support</h4>
                        <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                            <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#faq" className="hover:text-slate-900 dark:hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Parent Community</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-5 text-slate-900 dark:text-white">Contact Information</h4>
                        <p className="text-slate-600 dark:text-slate-400 mb-5 text-sm">Feel free to contact & reach us !</p>
                        <ul className="space-y-4 text-slate-600 dark:text-slate-300">
                            <li className="flex items-center gap-3"><i className="fa-solid fa-location-dot text-violet-600 dark:text-violet-400 text-lg"></i><span>Location</span></li>
                            <li className="flex items-center gap-3"><i className="fa-solid fa-phone text-violet-600 dark:text-violet-400 text-lg"></i><span>Number</span></li>
                            <li className="flex items-center gap-3"><i className="fa-solid fa-envelope text-violet-600 dark:text-violet-400 text-lg"></i><span>Email</span></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-black/10 dark:border-white/10 mt-12 pt-6 text-center text-slate-600 dark:text-slate-400">
                    <p>&copy; 2024 Omnisoft. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
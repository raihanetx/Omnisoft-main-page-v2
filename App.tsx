
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import TechStack from './components/TechStack.tsx';
import Projects from './components/Projects.tsx';
import Workflow from './components/Workflow.tsx';
import Reviews from './components/Reviews.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import Team from './components/Team.tsx';
import Faq from './components/Faq.tsx';
import Footer from './components/Footer.tsx';
import Chatbot from './components/Chatbot.tsx';

const App: React.FC = () => {
    const [paddingTop, setPaddingTop] = useState('70px');

    useEffect(() => {
        const updatePadding = () => {
            if (window.innerWidth < 768) {
                setPaddingTop('42px');
            } else {
                setPaddingTop('70px');
            }
        };

        updatePadding();
        window.addEventListener('resize', updatePadding);
        return () => window.removeEventListener('resize', updatePadding);
    }, []);

    return (
        <div className="overflow-x-hidden" style={{ paddingTop }}>
            <Header />
            <main>
                <Hero paddingTop={paddingTop} />
                <Services />
                <TechStack />
                <Projects />
                <Workflow />
                <Reviews />
                <WhyChooseUs />
                <Team />
                <Faq />
            </main>
            <Footer />
            <Chatbot />
        </div>
    );
};

export default App;
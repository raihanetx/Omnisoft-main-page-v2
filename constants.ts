
import { Service, Tech, Project, WorkflowStep, Review, WhyChooseUsItem, TeamMember, FaqItem } from './types';

export const servicesData: Service[] = [
    { iconClass: "fa-solid fa-pen-ruler", title: "UI/UX Design", description: "Creative and user-friendly design for websites and apps that enhance user experience and engagement." },
    { iconClass: "fa-solid fa-code", title: "Web App Development", description: "Custom web applications built with modern frameworks like React, Next.js, Laravel, and Node.js." },
    { iconClass: "fa-solid fa-mobile-screen-button", title: "Mobile App Development", description: "High-performing Android & iOS mobile apps designed to bring your ideas to user's fingertips." },
    { iconClass: "fa-solid fa-server", title: "Backend & API Development", description: "Scalable backend solutions and secure APIs using Node.js, PHP, Django, and GraphQL." },
    { iconClass: "fa-solid fa-cloud", title: "Cloud & DevOps Solutions", description: "Server setup, deployment, and cloud integration with Docker, VPS, and CI/CD pipelines." },
    { iconClass: "fa-solid fa-pen-nib", title: "Graphics & Branding", description: "Professional logos, social media graphics, and brand identity design with Adobe Photoshop & Illustrator." },
];

export const techStackData: Tech[] = [
    { iconClass: "fab fa-js-square", name: "JavaScript" }, { iconClass: "fab fa-node-js", name: "Node.js" },
    { iconClass: "fab fa-python", name: "Python" }, { iconClass: "fab fa-php", name: "PHP" },
    { iconClass: "fab fa-laravel", name: "Laravel" }, { iconClass: "fab fa-html5", name: "HTML5" },
    { iconClass: "fab fa-css3-alt", name: "CSS3" }, { iconClass: "fab fa-vuejs", name: "Vue.js" },
    { iconClass: "fa-solid fa-database", name: "MongoDB" }, { iconClass: "fab fa-docker", name: "Docker" },
    { iconClass: "fab fa-git-alt", name: "Git" }, { iconClass: "fab fa-aws", name: "AWS" },
];

export const projectsData: Project[] = [
    { img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop", title: "Social Media Platform", description: "A dynamic social networking app with real-time chat, content sharing, and a personalized user feed.", techStack: ["React", "Firebase", "Node.js", "WebSocket"], link: "#" },
    { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop", title: "Analytics Dashboard", description: "A comprehensive dashboard providing real-time insights and data visualization for business stakeholders.", techStack: ["React", "D3.js", "Node.js", "PostgreSQL"], link: "#" },
    { img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=872&auto=format&fit=crop", title: "E-commerce Storefront", description: "A fully-featured e-commerce platform with a modern storefront, product management, and a secure checkout process.", techStack: ["Next.js", "Stripe", "GraphQL", "Tailwind CSS"], link: "#" },
    { img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=870&auto=format&fit=crop", title: "SaaS Platform", description: "A scalable Software-as-a-Service platform offering subscription-based services with multi-tenancy.", techStack: ["Vue.js", "Firebase", "Express", "MongoDB"], link: "#" },
    { img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=870&auto=format&fit=crop", title: "Travel Booking App", description: "A mobile-first application that allows users to seamlessly search for and book flights and hotels.", techStack: ["React Native", "Python", "Django", "REST APIs"], link: "#" },
];

export const workflowData: WorkflowStep[] = [
    { iconClass: "fa-solid fa-lightbulb", title: "1. Planning", description: "We define goals and project scope." },
    { iconClass: "fa-solid fa-drafting-compass", title: "2. Design", description: "We create wireframes and UI/UX mockups." },
    { iconClass: "fa-solid fa-laptop-code", title: "3. Development", description: "Our team codes and builds your application." },
    { iconClass: "fa-solid fa-vial-circle-check", title: "4. Testing", description: "We ensure quality through rigorous testing." },
    { iconClass: "fa-solid fa-rocket", title: "5. Deployment", description: "We launch your project on secure servers." },
    { iconClass: "fa-solid fa-headset", title: "6. Support", description: "We provide ongoing maintenance and support." },
];

export const reviewsData: Review[] = [
    { name: "Michael R.", text: "They delivered on time, provided great support, and the final design exceeded my expectations.", rating: 4.5, img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop" },
    { name: "David K.", text: "Omnisoft transformed our business website into something modern and professional. Highly recommended!", rating: 5, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
    { name: "John J.", text: "The service quality and attention to detail are outstanding. I will definitely work with them again.", rating: 5, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" },
    { name: "David L.", text: "A fantastic team to collaborate with. They are true professionals in their field. Highly satisfied.", rating: 5, img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=800&auto=format&fit=crop" },
    { name: "Adam M.", text: "Their innovative solutions helped our business grow significantly. I couldn't be happier with the results.", rating: 5, img: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800&auto=format&fit=crop" },
    { name: "Chris P.", text: "The communication was excellent throughout the project. A very smooth and transparent process.", rating: 4.5, img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=800&auto=format&fit=crop" },
];

export const whyChooseUsData: WhyChooseUsItem[] = [
    { imgSrc: "https://i.postimg.cc/rKt0wm2V/workstation-6059353.png", title: "Professional Team", description: "Our expert team delivers innovative solutions tailored to your business needs." },
    { imgSrc: "https://i.postimg.cc/fSMcMyx8/checklist-18093887.png", title: "Quality of Work", description: "We deliver robust, scalable solutions meticulously crafted for performance." },
    { imgSrc: "https://i.postimg.cc/wR1tJxtk/shield-7917952.png", title: "Trusted", description: "We build lasting partnerships on transparency, reliability, and on-time delivery." },
    { imgSrc: "https://i.postimg.cc/CB1dTM4V/digital-money-6030673.png", title: "Affordable", description: "Get exceptional value with competitive pricing and flexible models for your success." },
];

export const teamData: TeamMember[] = [
    { img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", name: "Alamin Khan", role: "CEO, Co-Founder", skills: ["Business Strategy", "Client Relations", "Project Management"] },
    { img: "https://images.unsplash.com/photo-1628157588553-5ee30a6c2623?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3", name: "Tahcin Ul Karim", role: "CTO, Co-Founder", skills: ["System Architecture", "Full-Stack Dev", "DevOps"] },
    { img: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop", name: "Ahmmed Imtiaz", role: "Backend Developer", skills: ["Node.js", "Express", "MongoDB"] },
    { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop", name: "Mehedi Hasan", role: "Frontend Developer", skills: ["React", "Next.js", "UI Animation"] },
    { img: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1974&auto=format&fit=crop", name: "Tariqul Islam", role: "Frontend Developer", skills: ["Vue.js", "Tailwind CSS", "Clean Code"] },
    { img: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?q=80&w=1887&auto=format&fit=crop", name: "Ahon Khan", role: "Backend Developer", skills: ["Laravel", "PHP", "MySQL"] },
    { img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop", name: "Sudipto Sen", role: "Graphics Dept. Head", skills: ["UI/UX Design", "Figma", "Branding"] },
    { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format=fit&crop", name: "Raihan", role: "Mobile App Developer", skills: ["React Native", "Firebase", "Cross-Platform"] },
];

export const faqData: FaqItem[] = [
    { question: "What services does Omnisoft provide?", answer: "We offer Web Development, Mobile App Development, UI/UX Design, and Software Solutions tailored to your business needs." },
    { question: "How long does it take to deliver a project?", answer: "Project timelines vary based on complexity and scope. We provide a detailed project plan with milestones and deadlines after the initial consultation." },
    { question: "Do you provide after-sales support?", answer: "Yes, we offer various support and maintenance packages to ensure your application runs smoothly after launch." },
    { question: "What is your pricing model?", answer: "We offer flexible pricing models, including fixed-price, time and material, and dedicated team hiring, to best suit your project requirements." },
    { question: "What is your project management methodology?", answer: "We primarily use Agile methodologies, allowing for flexibility, transparency, and collaboration. This ensures that we can adapt to changes and deliver value to our clients incrementally." },
];

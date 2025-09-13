
export interface Service {
  iconClass: string;
  title: string;
  description: string;
}

export interface Tech {
  iconClass: string;
  name: string;
}

export interface Project {
  img: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

export interface WorkflowStep {
  iconClass: string;
  title: string;
  description: string;
}

export interface Review {
  name: string;
  text: string;
  rating: number;
  img: string;
}

export interface WhyChooseUsItem {
  imgSrc: string;
  title: string;
  description: string;
}

export interface TeamMember {
  img: string;
  name: string;
  role: string;
  skills: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

// FIX: Added ChatMessage interface to resolve missing type error in Chatbot.tsx.
export interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

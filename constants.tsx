
import React from 'react';

export const TREATMENT_CATEGORIES = [
  'IVF & Fertility Treatment',
  'Dental Implants & Orthodontics',
  'Cosmetic Surgery',
  'Corrective Eye Surgery (Lasik)',
  'Premium Health Screening',
  'Optical Procedures',
  'Elective Wellness Care'
];

export const NAV_LINKS = [
  { label: 'How It Works', path: '/', hash: 'how-it-works' },
  { label: 'Repayment Calculator', path: '/calculator' },
  { label: 'Developers', path: '/developers' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Track Application', path: '/track' }
];

export const TECH_STACK = [
  { name: 'React 19', version: '19.2.3', category: 'Frontend', description: 'Next-gen UI library for high-performance interfaces.' },
  { name: 'Gemini AI', version: '3 Pro', category: 'Intelligence', description: 'Smart credit analysis and financing advice via Google GenAI.' },
  { name: 'Tailwind CSS', version: '3.4+', category: 'Styling', description: 'Utility-first CSS for medical-grade responsive design.' },
  { name: 'Vite', version: 'Latest', category: 'Bundling', description: 'Lightning-fast development and optimized production builds.' }
];

export const FAQS = [
  {
    question: "What is CareCova?",
    answer: "CareCova is a healthcare financing platform that allows you to pay for elective medical procedures in flexible installments rather than all at once."
  },
  {
    question: "Is there any collateral required?",
    answer: "No, CareCova does not require collateral. Our approval is based on your affordability and credit profile."
  },
  {
    question: "How long does approval take?",
    answer: "We aim for quick approval within 24 hours once all required documents are submitted."
  },
  {
    question: "Which clinics can I use CareCova at?",
    answer: "Currently, you can use CareCova at any registered medical facility in Nigeria. Simply provide their details during your application."
  }
];

export const PARTNER_HOSPITALS = [
  {
    id: 'h1',
    name: 'St. Nicholas Hospital',
    location: 'Lagos Island, Lagos',
    specialty: 'Multispecialty & Surgery',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce2?q=80&w=2073&auto=format&fit=crop'
  }
];

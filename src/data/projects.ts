export interface Project {
  id: number;
  title: string;
  category: string;
  desc: string;
  image: string;
  comparison?: {
    before: { items: string[]; link: string };
    after: { items: string[]; link: string };
  };
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: 5,
    title: 'PexelParadox — Agency Website Concept',
    category: 'Marketing Agency Website',
    desc: 'A premium marketing agency website built to showcase services, client results, and generate qualified leads through a modern, conversion-focused experience.',
    image: 'https://i.ibb.co/G4q2FYBG/IMG-20260615-190044.jpg',
    comparison: {
      before: {
        items: ['Outdated template-based website', 'Limited online authority', 'No dedicated lead generation system'],
        link: ''
      },
      after: {
        items: ['Premium agency website', 'Service & results showcase', 'SEO Optimized', 'Mobile Responsive', 'Fast Performance', 'In-Built Form Inquiry System'],
        link: 'https://pexelparadox.vercel.app/'
      }
    }
  },
  {
    id: 4,
    title: 'Gill Architects — Architecture Website',
    category: 'Architecture Studio Website',
    desc: 'A premium architecture website designed to showcase residential and commercial projects, build credibility, attract higher-value clients, and establish a strong digital presence across Punjab.',
    image: 'https://i.ibb.co/mVqjmywr/IMG-20260610-161309.jpg',
    comparison: {
      before: {
        items: ['No Professional Website', 'Instagram Only Presence', 'No Online Inquiries'],
        link: ''
      },
      after: {
        items: ['Premium Architecture Website', 'Project Showcase System', 'Lead Generation Funnel', 'Advanced SEO', 'Fast Performance', 'Mobile Responsive', 'Bonus : Architectural Brand Experience'],
        link: 'https://gillarchitects.vercel.app/'
      }
    }
  },
  {
    id: 1,
    title: 'FCG Landscaping — Website Redesign',
    category: 'Landscaping Website',
    desc: 'Modern redesign concept focused on improving lead generation, user experience, and visual credibility for the landscaping business.',
    image: 'https://i.ibb.co/RTz95yT6/image.png',
    comparison: {
      before: {
        items: ['Outdated design', 'Weak CTA', 'Poor mobile layout', 'Template Used Website'],
        link: 'https://www.fcglandscaping.com.au/'
      },
      after: {
        items: ['Modern UI', 'Strong CTA', 'Mobile optimized', 'Fast Performance', 'Responsive', 'Lead Generation'],
        link: 'https://fcglandscapingsydney.vercel.app/'
      }
    }
  },
  {
    id: 2,
    title: 'WAO Fitness Gym — Website Concept',
    category: 'Fitness Gym Website',
    desc: 'A modern, high-performance gym website concept designed to showcase facilities, build trust, and drive membership inquiries.',
    image: 'https://i.ibb.co/60kqMspk/image.png',
    comparison: {
      before: {
        items: ['No website', 'Only Instagram presence', 'No online inquiry system'],
        link: ''
      },
      after: {
        items: ['Professional gym website', 'Facility showcase sections', 'Clear membership CTA', 'Fast Performance', 'Mobile Responsive', 'Membership Focus', 'Bonus : Special Personalized Ai Assistant Chatbot'],
        link: 'https://waofitnessgymchandigarh.vercel.app/'
      }
    }
  },
  {
    id: 3,
    title: 'Alligator Fitness Gym — Website Concept',
    category: 'Fitness Gym Website',
    desc: 'Modern website concept designed to attract new members and strengthen the gym’s digital presence in New Delhi.',
    image: 'https://i.ibb.co/k2NWKFr8/image.png',
    comparison: {
      before: {
        items: ['No official website', 'Only social media presence', 'No membership inquiry system'],
        link: ''
      },
      after: {
        items: ['Professional gym website', 'Facility & program sections', 'Clear membership CTA', 'Fast Performance', 'Mobile Responsive', 'Membership Focus', 'Bonus : Special Personalized Ai Assistant Chatbot'],
        link: 'https://alligator-fitness-gym-new-delhi.vercel.app/'
      }
    }
  }
];

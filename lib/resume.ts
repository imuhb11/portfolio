export type ResumeData = {
  name: string;
  roles: string[];
  summary: string;

  education: Array<{
    program: string;
    institution: string;
    period: string;
    grade?: string;
  }>;

  skills: {
    programming: string[];
    web: string[];
    database: string[];
    ai: string[];
    core: string[];
    soft: string[];
  };

  internship: {
    title: string;
    bullets: string[];
    metrics: string[];
    technologies: string[];
  };

  projects: Array<{
    title: string;
    category: string;
    description: string;
    stack: string[];
    features: string[];
    liveDemoUrl?: string;
    githubUrl?: string;
    caseStudyUrl?: string;
    images?: string[]; // optional placeholders
  }>;

  achievements: Array<{ label: string; value: string }>;

  certifications: Array<{ title: string; year: string; issuer: string; note?: string }>;

  contact: {
    email: string;
    phone: string;
    location: string;
    socials: Array<{ label: string; href: string }>;
  };
};

// NOTE: Keep placeholders where the user didn't provide exact details.
export const resumeData: ResumeData = {
  name: 'BHUMI VIJAYKUMAR HINGU',
  roles: [
    'Computer Engineering Student',
    'AI & Machine Learning Enthusiast',
    'Software Developer',
    'Future Software Engineer',
  ],
  summary:
    'Computer Engineering student passionate about AI, machine learning, and building scalable software that feels effortless.',

  education: [
    {
      program: 'BE Computer Engineering',
      institution: 'Savitribai Phule Pune University',
      period: '2024-2027',
    },
    {
      program: 'Diploma',
      institution: 'KCES College',
      period: '',
      grade: '85.09%',
    },
    {
      program: 'SSC',
      institution: '',
      period: '',
      grade: '87.20%',
    },
  ],

  skills: {
    programming: ['C', 'C++', 'Java', 'Python'],
    web: ['HTML', 'PHP'],
    database: ['SQL'],
    ai: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit Learn'],
    core: ['Operating Systems', 'Computer Networks', 'Data Structures'],
    soft: ['Communication', 'Problem Solving', 'Teamwork'],
  },

  internship: {
    title: 'AI & Machine Learning Intern',
    bullets: ['Data Cleaning', 'Feature Engineering', 'Linear Regression', 'Decision Trees', 'Random Forest', 'SVM'],
    metrics: ['Data Cleaning', 'Feature Engineering', 'Linear Regression', 'Decision Trees', 'Random Forest', 'SVM', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit Learn'],
    technologies: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit Learn'],
  },

  projects: [
    {
      title: 'Virtual Mouse using AI',
      category: 'Computer Vision / Gesture Recognition',
      description: 'Real Time Cursor Control powered by AI-based gesture recognition.',
      stack: ['Python', 'OpenCV'],
      features: ['Computer Vision', 'Gesture Recognition', 'Real Time Cursor Control'],
      liveDemoUrl: '#',
      githubUrl: '#',
      caseStudyUrl: '#',
      images: [],
    },
  ],

  achievements: [
    { label: 'Diploma', value: '85.09%' },
    { label: 'SSC', value: '87.20%' },
    { label: 'Machine Learning Internship', value: 'Completed' },
  ],

  certifications: [
    { title: 'Certification Placeholder', year: '2025', issuer: '—', note: 'Add details when available.' },
  ],

  contact: {
    email: 'your-email@example.com',
    phone: 'your-phone',
    location: 'Your Location',
    socials: [
      { label: 'GitHub', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'LeetCode', href: '#' },
      { label: 'HackerRank', href: '#' },
    ],
  },
};


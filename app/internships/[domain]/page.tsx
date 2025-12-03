import { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/components/seo/Metadata';
import { notFound } from 'next/navigation';
import DomainPageContent from './DomainPageContent';

interface DomainPageProps {
  params: Promise<{
    domain: string;
  }>;
}

const domainData: Record<string, any> = {
  'web-development': {
    name: 'Web Development',
    description: 'Master modern web technologies and build real-world web applications.',
    icon: '🌐',
    skills: [
      'HTML5, CSS3, JavaScript (ES6+)',
      'React.js and Next.js',
      'Node.js and Express',
      'RESTful API Development',
      'Database Design (MySQL, MongoDB)',
      'Git and GitHub',
      'Responsive Web Design',
      'Authentication & Authorization',
    ],
    tools: [
      'React, Next.js, Vue.js',
      'Node.js, Express',
      'MongoDB, MySQL, PostgreSQL',
      'Git, GitHub',
      'VS Code, Postman',
      'Tailwind CSS, Bootstrap',
    ],
    tasks: {
      beginner: [
        'Build a responsive portfolio website',
        'Create a to-do list application',
        'Design a landing page with animations',
      ],
      intermediate: [
        'Develop a weather app with API integration',
        'Build an e-commerce product page',
        'Create a blog platform with authentication',
      ],
      advanced: [
        'Build a real-time chat application',
        'Develop a task management system',
        'Create a social media dashboard',
      ],
      final: [
        'Full-stack e-commerce platform',
        'Learning Management System (LMS)',
      ],
    },
    exampleProjects: [
      'E-commerce Platform with Payment Integration',
      'Social Media Dashboard with Analytics',
      'Task Management System with Real-time Updates',
      'Blog Platform with CMS Features',
    ],
    whyChoose: [
      'Industry-standard technologies used by top companies',
      'Real-world projects that showcase your skills',
      'Comprehensive learning path from beginner to advanced',
      'GitHub portfolio that impresses employers',
    ],
    faqs: [
      {
        q: 'Do I need prior experience in web development?',
        a: 'No prior experience required. Our program starts from the basics and progresses to advanced topics. However, basic programming knowledge is helpful.',
      },
      {
        q: 'What technologies will I learn?',
        a: 'You\'ll learn modern web technologies including React, Node.js, databases, and API development. The exact stack depends on your chosen duration.',
      },
      {
        q: 'Will I get a certificate?',
        a: 'Yes, upon successful completion of all tasks, you\'ll receive a verified certificate with QR code that employers can verify.',
      },
    ],
  },
  'data-science': {
    name: 'Data Science',
    description: 'Learn data analysis, visualization, and machine learning with real datasets.',
    icon: '📊',
    skills: [
      'Python Programming',
      'Data Analysis with Pandas',
      'Data Visualization (Matplotlib, Seaborn)',
      'Machine Learning Algorithms',
      'Statistical Analysis',
      'SQL for Data Extraction',
      'Jupyter Notebooks',
      'Data Cleaning & Preprocessing',
    ],
    tools: [
      'Python, NumPy, Pandas',
      'Matplotlib, Seaborn, Plotly',
      'Scikit-learn, TensorFlow',
      'Jupyter Notebooks',
      'SQL, MySQL',
      'Tableau (optional)',
    ],
    tasks: {
      beginner: [
        'Data cleaning and preprocessing',
        'Exploratory Data Analysis (EDA)',
        'Basic data visualization dashboard',
      ],
      intermediate: [
        'Predictive model development',
        'Time series analysis',
        'Customer segmentation analysis',
      ],
      advanced: [
        'Natural Language Processing project',
        'Recommendation system',
        'Deep learning model for image classification',
      ],
      final: [
        'End-to-end ML pipeline with MLOps',
        'Advanced analytics dashboard',
      ],
    },
    exampleProjects: [
      'Sales Forecasting Model',
      'Customer Churn Prediction',
      'Sentiment Analysis System',
      'Image Classification Model',
    ],
    whyChoose: [
      'Work with real-world datasets from various industries',
      'Learn industry-standard tools and libraries',
      'Build a portfolio of data science projects',
      'Understand the complete data science workflow',
    ],
    faqs: [
      {
        q: 'What programming language is used?',
        a: 'Python is the primary language for data science. You\'ll also work with SQL for data extraction.',
      },
      {
        q: 'Do I need a powerful computer?',
        a: 'A standard laptop is sufficient for most tasks. Cloud platforms can be used for heavy computations.',
      },
      {
        q: 'What datasets will I work with?',
        a: 'You\'ll work with real datasets covering various domains like finance, e-commerce, healthcare, and more.',
      },
    ],
  },
  'mobile-development': {
    name: 'Mobile Development',
    description: 'Develop native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
    skills: [
      'React Native / Flutter',
      'Mobile UI/UX Design',
      'State Management',
      'API Integration',
      'Push Notifications',
      'App Store Deployment',
      'Mobile Testing',
      'Performance Optimization',
    ],
    tools: [
      'React Native, Flutter',
      'Android Studio, Xcode',
      'Firebase',
      'Git, GitHub',
      'Postman',
      'Figma (for design)',
    ],
    tasks: {
      beginner: [
        'Build a calculator app',
        'Create a notes application',
        'Develop a weather app',
      ],
      intermediate: [
        'Task manager app with notifications',
        'Social media feed app',
        'Fitness tracker application',
      ],
      advanced: [
        'Real-time messaging app',
        'E-commerce mobile app',
        'Location-based services app',
      ],
      final: [
        'Complete social platform',
        'Healthcare management app',
      ],
    },
    exampleProjects: [
      'E-commerce Mobile App',
      'Social Media Platform',
      'Fitness Tracking App',
      'Food Delivery App',
    ],
    whyChoose: [
      'Learn both iOS and Android development',
      'Build apps that can be published to app stores',
      'Work with modern mobile frameworks',
      'Understand mobile app architecture',
    ],
    faqs: [
      {
        q: 'Do I need a Mac for iOS development?',
        a: 'For native iOS development, yes. However, React Native and Flutter allow cross-platform development from any OS.',
      },
      {
        q: 'Which framework should I learn?',
        a: 'We recommend React Native or Flutter as they allow you to build for both platforms. The choice depends on your preference.',
      },
      {
        q: 'Can I publish my app to app stores?',
        a: 'Yes, you can publish your final project to Google Play Store and Apple App Store (with appropriate accounts).',
      },
    ],
  },
  'cloud-computing': {
    name: 'Cloud Computing',
    description: 'Master AWS, Azure, and cloud infrastructure for scalable applications.',
    icon: '☁️',
    skills: [
      'AWS Services (EC2, S3, Lambda)',
      'Cloud Architecture',
      'DevOps Practices',
      'Containerization (Docker)',
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Cloud Security',
      'Auto-scaling & Load Balancing',
    ],
    tools: [
      'AWS, Azure, GCP',
      'Docker, Kubernetes',
      'Terraform, CloudFormation',
      'Jenkins, GitHub Actions',
      'Linux, Bash',
      'Monitoring Tools',
    ],
    tasks: {
      beginner: [
        'Set up cloud infrastructure',
        'Create cloud storage solution',
        'Build serverless function',
      ],
      intermediate: [
        'Implement auto-scaling application',
        'Create CI/CD pipeline',
        'Build containerized application',
      ],
      advanced: [
        'Implement microservices architecture',
        'Create multi-region deployment',
        'Build cloud-native data pipeline',
      ],
      final: [
        'Enterprise cloud platform',
        'Serverless microservices platform',
      ],
    },
    exampleProjects: [
      'Scalable Web Application on AWS',
      'Microservices Architecture',
      'Serverless Application',
      'Multi-Region Deployment',
    ],
    whyChoose: [
      'Learn industry-standard cloud platforms',
      'Understand enterprise-grade infrastructure',
      'Build scalable and reliable systems',
      'Gain DevOps and cloud architecture skills',
    ],
    faqs: [
      {
        q: 'Do I need to pay for cloud services?',
        a: 'Most cloud providers offer free tiers. We\'ll guide you to use free resources for learning.',
      },
      {
        q: 'Which cloud platform should I focus on?',
        a: 'We recommend starting with AWS as it\'s the most widely used. You\'ll also learn concepts applicable to other platforms.',
      },
      {
        q: 'What prior knowledge is required?',
        a: 'Basic understanding of web development and Linux commands is helpful but not mandatory.',
      },
    ],
  },
  'cybersecurity': {
    name: 'Cybersecurity',
    description: 'Learn security fundamentals, ethical hacking, and protect systems from threats.',
    icon: '🔒',
    skills: [
      'Network Security',
      'Ethical Hacking',
      'Vulnerability Assessment',
      'Security Auditing',
      'Cryptography',
      'Penetration Testing',
      'Security Policies',
      'Incident Response',
    ],
    tools: [
      'Kali Linux',
      'Wireshark, Nmap',
      'Metasploit',
      'Burp Suite',
      'OWASP Tools',
      'Security Frameworks',
    ],
    tasks: {
      beginner: [
        'Security audit of web application',
        'Implement secure authentication',
        'Create security policy document',
      ],
      intermediate: [
        'Build penetration testing framework',
        'Implement encryption system',
        'Develop intrusion detection system',
      ],
      advanced: [
        'Build SIEM system',
        'Create zero-trust security architecture',
        'Develop threat intelligence platform',
      ],
      final: [
        'Comprehensive Security Operations Center',
        'Enterprise security platform',
      ],
    },
    exampleProjects: [
      'Security Audit Report',
      'Penetration Testing Framework',
      'Intrusion Detection System',
      'Security Information Management',
    ],
    whyChoose: [
      'Learn ethical hacking and security best practices',
      'Understand real-world security threats',
      'Build security tools and frameworks',
      'Gain industry-recognized security skills',
    ],
    faqs: [
      {
        q: 'Is this for ethical hacking?',
        a: 'Yes, we focus on ethical hacking and defensive security. All activities are legal and educational.',
      },
      {
        q: 'What tools will I use?',
        a: 'You\'ll work with industry-standard security tools like Kali Linux, Wireshark, and security frameworks.',
      },
      {
        q: 'Do I need special hardware?',
        a: 'A standard laptop is sufficient. Virtual machines will be used for security testing environments.',
      },
    ],
  },
  'machine-learning': {
    name: 'Machine Learning',
    description: 'Deep dive into AI and ML algorithms. Build neural networks and intelligent systems.',
    icon: '🤖',
    skills: [
      'Machine Learning Algorithms',
      'Deep Learning (Neural Networks)',
      'TensorFlow, PyTorch',
      'Data Preprocessing',
      'Model Training & Evaluation',
      'Natural Language Processing',
      'Computer Vision',
      'MLOps',
    ],
    tools: [
      'Python, NumPy, Pandas',
      'TensorFlow, PyTorch, Keras',
      'Scikit-learn',
      'Jupyter Notebooks',
      'MLflow',
      'Cloud ML Platforms',
    ],
    tasks: {
      beginner: [
        'Linear and logistic regression',
        'Classification models',
        'Basic neural networks',
      ],
      intermediate: [
        'Deep learning models',
        'Image classification',
        'Text classification',
      ],
      advanced: [
        'CNN for image recognition',
        'NLP with transformers',
        'Recommendation systems',
      ],
      final: [
        'End-to-end ML pipeline',
        'Production ML system',
      ],
    },
    exampleProjects: [
      'Image Classification System',
      'Sentiment Analysis Model',
      'Recommendation Engine',
      'Chatbot with NLP',
    ],
    whyChoose: [
      'Learn cutting-edge AI/ML technologies',
      'Work on real-world ML problems',
      'Build production-ready ML models',
      'Understand the complete ML lifecycle',
    ],
    faqs: [
      {
        q: 'Do I need strong math background?',
        a: 'Basic math knowledge is helpful, but we explain concepts in practical terms. Focus is on implementation.',
      },
      {
        q: 'What hardware do I need?',
        a: 'A standard laptop works. For deep learning, we\'ll use cloud platforms like Google Colab.',
      },
      {
        q: 'Will I learn deep learning?',
        a: 'Yes, advanced tasks include deep learning, neural networks, and modern AI techniques.',
      },
    ],
  },
  'python-development': {
    name: 'Python Development',
    description: 'Master Python programming, Django, Flask, and build scalable backend systems.',
    icon: '🐍',
    skills: [
      'Python Programming',
      'Django & Flask Frameworks',
      'RESTful API Development',
      'Database Integration',
      'Web Scraping',
      'Automation Scripts',
      'Testing & Debugging',
      'Deployment',
    ],
    tools: [
      'Python 3.x',
      'Django, Flask',
      'PostgreSQL, MySQL',
      'Git, GitHub',
      'Docker',
      'Postman',
    ],
    tasks: {
      beginner: [
        'Basic Python applications',
        'Web scraping project',
        'Automation scripts',
      ],
      intermediate: [
        'Django web application',
        'REST API development',
        'Database-driven app',
      ],
      advanced: [
        'Microservices architecture',
        'Real-time application',
        'Advanced Django features',
      ],
      final: [
        'Full-stack Python application',
        'Production-ready system',
      ],
    },
    exampleProjects: [
      'E-commerce Backend',
      'Social Media API',
      'Task Management System',
      'Data Processing Pipeline',
    ],
    whyChoose: [
      'Learn one of the most versatile programming languages',
      'Build scalable backend systems',
      'Work with popular Python frameworks',
      'Understand server-side development',
    ],
    faqs: [
      {
        q: 'Is Python good for beginners?',
        a: 'Yes, Python is one of the best languages for beginners due to its simple syntax and readability.',
      },
      {
        q: 'Which framework should I learn?',
        a: 'We cover both Django (for full-featured apps) and Flask (for lightweight APIs).',
      },
      {
        q: 'What can I build with Python?',
        a: 'Python is versatile - web apps, APIs, data science, automation, AI/ML, and more.',
      },
    ],
  },
  'java-development': {
    name: 'Java Development',
    description: 'Learn Java programming, Spring Boot framework, and enterprise application development.',
    icon: '☕',
    skills: [
      'Java Programming',
      'Spring Boot Framework',
      'RESTful API Development',
      'Database Integration (JPA)',
      'Microservices',
      'Maven/Gradle',
      'Testing (JUnit)',
      'Enterprise Patterns',
    ],
    tools: [
      'Java 17+',
      'Spring Boot, Spring MVC',
      'MySQL, PostgreSQL',
      'Maven, Gradle',
      'IntelliJ IDEA',
      'Postman',
    ],
    tasks: {
      beginner: [
        'Basic Java applications',
        'Object-oriented programming',
        'Simple Spring Boot app',
      ],
      intermediate: [
        'REST API with Spring Boot',
        'Database integration',
        'Authentication system',
      ],
      advanced: [
        'Microservices architecture',
        'Advanced Spring features',
        'Enterprise application',
      ],
      final: [
        'Full enterprise system',
        'Production-ready application',
      ],
    },
    exampleProjects: [
      'Enterprise REST API',
      'E-commerce Backend',
      'Microservices System',
      'Task Management Platform',
    ],
    whyChoose: [
      'Learn enterprise-grade Java development',
      'Master Spring Boot - industry standard',
      'Build scalable backend systems',
      'Understand enterprise patterns',
    ],
    faqs: [
      {
        q: 'Is Java still relevant?',
        a: 'Absolutely! Java is widely used in enterprise applications and remains one of the most popular languages.',
      },
      {
        q: 'What is Spring Boot?',
        a: 'Spring Boot is a framework that simplifies Java development, making it easier to build production-ready applications.',
      },
      {
        q: 'Do I need prior Java experience?',
        a: 'Basic programming knowledge helps, but we cover Java fundamentals. Prior experience is not mandatory.',
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(domainData).map((domain) => ({
    domain,
  }));
}

export async function generateMetadata({ params }: DomainPageProps): Promise<Metadata> {
  const { domain: domainSlug } = await params;
  const domain = domainData[domainSlug];
  if (!domain) {
    return createMetadata({
      title: 'Domain Not Found',
      description: 'The requested internship domain was not found.',
    });
  }

  return createMetadata({
    title: `${domain.name} Virtual Internship`,
    description: `${domain.description} Join ByteLab's ${domain.name.toLowerCase()} internship program. Learn industry skills, work on real projects, and get a verified certificate.`,
    keywords: [
      `${domain.name.toLowerCase()} internship`,
      `virtual ${domain.name.toLowerCase()} internship`,
      `${domain.name.toLowerCase()} certificate`,
      `learn ${domain.name.toLowerCase()}`,
    ],
    canonical: `https://bytelab.com/internships/${domainSlug}`,
  });
}

// Helper function to generate basic domain data from slug
function generateDomainFromSlug(slug: string): any {
  // Generate slug from name to match domainNameToSlug function
  const nameToSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  
  const nameMap: Record<string, string> = {
    [nameToSlug('Web Development')]: 'Web Development',
    [nameToSlug('Data Science')]: 'Data Science',
    [nameToSlug('Mobile Development')]: 'Mobile Development',
    [nameToSlug('Cloud Computing')]: 'Cloud Computing',
    [nameToSlug('Cybersecurity')]: 'Cybersecurity',
    [nameToSlug('Frontend Developer')]: 'Frontend Developer',
    [nameToSlug('Backend Developer')]: 'Backend Developer',
    [nameToSlug('Full Stack Developer')]: 'Full Stack Developer',
    [nameToSlug('App Developer')]: 'App Developer',
    [nameToSlug('Python Programming')]: 'Python Programming',
    [nameToSlug('Java Programming')]: 'Java Programming',
    [nameToSlug('C++ Programming')]: 'C++ Programming',
    [nameToSlug('C Programming')]: 'C Programming',
    [nameToSlug('DevOps')]: 'DevOps',
    [nameToSlug('AI')]: 'AI',
    [nameToSlug('Data Analytics')]: 'Data Analytics',
    [nameToSlug('Bioinformatics')]: 'Bioinformatics',
    [nameToSlug('Digital Marketing')]: 'Digital Marketing',
    [nameToSlug('Business Strategy')]: 'Business Strategy',
    [nameToSlug('Finance & Investment')]: 'Finance & Investment',
    [nameToSlug('HR')]: 'HR',
    [nameToSlug('Stock Market Trading')]: 'Stock Market Trading',
    [nameToSlug('Content Writing')]: 'Content Writing',
    [nameToSlug('UI/UX')]: 'UI/UX',
    [nameToSlug('Graphics Automation')]: 'Graphics Automation',
  };

  const descriptionMap: Record<string, string> = {
    [nameToSlug('Web Development')]: 'Master modern web technologies and build real-world web applications.',
    [nameToSlug('Data Science')]: 'Transform raw data into actionable business insights through advanced analytics, machine learning, and statistical modeling.',
    [nameToSlug('Mobile Development')]: 'Build native and cross-platform mobile applications for iOS and Android platforms.',
    [nameToSlug('Cloud Computing')]: 'Master cloud infrastructure, services, and deployment strategies on leading platforms like AWS, Azure, and GCP.',
    [nameToSlug('Cybersecurity')]: 'Protect digital assets and infrastructure from evolving cyber threats through comprehensive security practices.',
    [nameToSlug('Frontend Developer')]: 'Specialize in creating engaging, responsive user interfaces using modern frontend technologies.',
    [nameToSlug('Backend Developer')]: 'Build robust, scalable server-side applications and APIs that power modern web and mobile platforms.',
    [nameToSlug('Full Stack Developer')]: 'Become proficient in both frontend and backend development to build complete, end-to-end web applications.',
    [nameToSlug('App Developer')]: 'Develop native and cross-platform mobile applications for iOS, Android, and hybrid platforms.',
    [nameToSlug('Python Programming')]: 'Master Python, one of the most versatile and in-demand programming languages.',
    [nameToSlug('Java Programming')]: 'Develop enterprise-grade applications using Java, the cornerstone of enterprise software development.',
    [nameToSlug('C++ Programming')]: 'Master C++ for high-performance system programming, game development, and resource-intensive applications.',
    [nameToSlug('C Programming')]: 'Learn the fundamentals of programming with C, the foundation of modern computing.',
    [nameToSlug('DevOps')]: 'Bridge the gap between development and operations through automation, continuous integration, and infrastructure as code.',
    [nameToSlug('AI')]: 'Explore artificial intelligence and machine learning to build intelligent systems that learn and adapt.',
    [nameToSlug('Data Analytics')]: 'Transform business data into strategic insights through statistical analysis, data visualization, and business intelligence.',
    [nameToSlug('Bioinformatics')]: 'Combine biology, computer science, and data analysis to solve complex biological problems.',
    [nameToSlug('Digital Marketing')]: 'Master the art of promoting products and services through digital channels.',
    [nameToSlug('Business Strategy')]: 'Develop strategic thinking and business acumen to drive organizational growth and competitive advantage.',
    [nameToSlug('Finance & Investment')]: 'Gain expertise in financial analysis, investment strategies, portfolio management, and risk assessment.',
    [nameToSlug('HR')]: 'Master human resources management, talent acquisition, employee relations, performance management, and organizational development.',
    [nameToSlug('Stock Market Trading')]: 'Learn technical and fundamental analysis, trading strategies, risk management, and market psychology.',
    [nameToSlug('Content Writing')]: 'Develop professional writing skills for digital platforms, marketing, and communication.',
    [nameToSlug('UI/UX')]: 'Design intuitive, user-centered digital experiences through user research, wireframing, prototyping, and usability testing.',
    [nameToSlug('Graphics Automation')]: 'Automate graphic design workflows and create dynamic visual content using programming and automation tools.',
  };

  const name = nameMap[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const description = descriptionMap[slug] || `Explore ${name} and gain hands-on experience with real-world projects.`;

  return {
    name,
    description,
    icon: '💼',
    skills: [
      'Industry-standard tools and technologies',
      'Real-world project experience',
      'Best practices and methodologies',
      'Portfolio development',
    ],
    tools: [
      'Modern development tools',
      'Industry-standard frameworks',
      'Version control systems',
      'Collaboration platforms',
    ],
    tasks: {
      beginner: [
        'Foundation projects',
        'Basic concepts and tools',
        'Initial portfolio pieces',
      ],
      intermediate: [
        'Intermediate-level projects',
        'Advanced concepts',
        'Real-world applications',
      ],
      advanced: [
        'Complex projects',
        'Advanced techniques',
        'Production-ready solutions',
      ],
      final: [
        'Capstone project',
        'Portfolio showcase',
      ],
    },
    exampleProjects: [
      'Real-world application',
      'Portfolio project',
      'Industry-standard solution',
    ],
    whyChoose: [
      'Industry-standard technologies',
      'Real-world projects',
      'Comprehensive learning path',
      'Verified certificate',
    ],
    faqs: [
      {
        q: 'Do I need prior experience?',
        a: 'No prior experience required. Our program starts from the basics and progresses to advanced topics.',
      },
      {
        q: 'What will I learn?',
        a: `You'll learn ${name.toLowerCase()} fundamentals and advanced concepts through hands-on projects.`,
      },
      {
        q: 'Will I get a certificate?',
        a: 'Yes, upon successful completion of all tasks, you\'ll receive a verified certificate with QR code.',
      },
    ],
  };
}

export default async function DomainPage({ params }: DomainPageProps) {
  const { domain: domainSlug } = await params;
  let domain = domainData[domainSlug];
  
  // If domain not found in domainData, generate basic data from slug
  if (!domain) {
    domain = generateDomainFromSlug(domainSlug);
  }

  return <DomainPageContent domain={domain} domainSlug={domainSlug} />;
}


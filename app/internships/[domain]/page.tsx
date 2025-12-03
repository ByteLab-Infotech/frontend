import { Metadata } from 'next';
import { generateMetadata as createMetadata } from '@/components/seo/Metadata';
import { SchemaMarkup } from '@/components/seo/SchemaMarkup';
import { Navigation } from '@/components/Navigation';
import { ContentSection } from '@/components/content/ContentSection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/lib/animations';
import { CheckCircle2, Clock, Award, Code, BookOpen, Target } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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

export default async function DomainPage({ params }: DomainPageProps) {
  const { domain: domainSlug } = await params;
  const domain = domainData[domainSlug];
  
  if (!domain) {
    notFound();
  }

  return (
    <>
      <SchemaMarkup
        type="article"
        data={{
          headline: `${domain.name} Virtual Internship Program`,
          description: domain.description,
          datePublished: new Date().toISOString(),
          dateModified: new Date().toISOString(),
          image: `https://bytelab.com/internships/${domainSlug}.jpg`,
        }}
      />
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-slate-grey to-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="text-6xl mb-6">{domain.icon}</div>
              <h1 className="text-hero font-heading font-bold text-navy mb-6">
                {domain.name} Virtual Internship
              </h1>
              <p className="text-body-lg text-gray-700 leading-relaxed mb-8">
                {domain.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/register">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-byte-orange text-white rounded-lg font-semibold hover:bg-[#E5822A] transition-colors"
                  >
                    Start Your Internship
                  </motion.button>
                </Link>
                <Link href="/internships">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-transparent border-2 border-navy text-navy rounded-lg font-semibold hover:bg-navy/5 transition-colors"
                  >
                    View All Domains
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What You'll Learn */}
        <ContentSection title="What You'll Learn" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="grid md:grid-cols-2 gap-6"
            >
              {domain.skills.map((skill: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                  <span className="text-body text-gray-700">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ContentSection>

        {/* Tools You'll Use */}
        <ContentSection title="Tools & Technologies" className="bg-slate-grey">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="bg-white rounded-xl p-8 border border-gray-100"
            >
              <div className="flex flex-wrap gap-3">
                {domain.tools.map((tool: string, index: number) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-electric-blue/10 text-electric-blue rounded-lg text-body font-medium"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </ContentSection>

        {/* Tasks Breakdown */}
        <ContentSection title="Tasks & Projects" className="bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(domain.tasks).map(([level, tasks]: [string, any]) => (
                <motion.div
                  key={level}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="bg-slate-grey rounded-xl p-6 border border-gray-100"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-electric-blue" />
                    <h3 className="text-h3 font-heading font-semibold text-navy capitalize">
                      {level}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {tasks.map((task: string, index: number) => (
                      <li key={index} className="text-body-sm text-gray-600 flex items-start gap-2">
                        <span className="text-electric-blue mt-1">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </ContentSection>

        {/* Example Projects */}
        <ContentSection title="Example Projects" className="bg-slate-grey">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="grid md:grid-cols-2 gap-6"
            >
              {domain.exampleProjects.map((project: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-100"
                >
                  <div className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-electric-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-h3 font-heading font-semibold text-navy mb-2">
                        {project}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ContentSection>

        {/* Duration Options */}
        <ContentSection title="Duration Options" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="grid md:grid-cols-3 gap-6"
            >
              {[30, 45, 90].map((duration) => (
                <motion.div
                  key={duration}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-electric-blue/5 to-transparent rounded-xl p-6 border border-electric-blue/20 text-center"
                >
                  <Clock className="w-12 h-12 text-electric-blue mx-auto mb-4" />
                  <h3 className="text-h3 font-heading font-bold text-navy mb-2">
                    {duration} Days
                  </h3>
                  <p className="text-body text-gray-600">
                    {duration === 30 && 'Perfect for quick skill building'}
                    {duration === 45 && 'Balanced learning experience'}
                    {duration === 90 && 'Comprehensive deep dive'}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ContentSection>

        {/* Why Choose ByteLab */}
        <ContentSection title={`Why Choose ByteLab for ${domain.name}`} className="bg-slate-grey">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
              className="grid md:grid-cols-2 gap-6"
            >
              {domain.whyChoose.map((reason: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-gray-100 flex items-start gap-4"
                >
                  <Target className="w-6 h-6 text-electric-blue flex-shrink-0 mt-1" />
                  <p className="text-body text-gray-700">{reason}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ContentSection>

        {/* FAQs */}
        <ContentSection title="Frequently Asked Questions" className="bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {domain.faqs.map((faq: any, index: number) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-slate-grey rounded-xl p-6 border border-gray-100"
                >
                  <h3 className="text-h3 font-heading font-semibold text-navy mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-body text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ContentSection>

        {/* CTA */}
        <ContentSection className="bg-navy text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-display font-heading font-bold text-white mb-6">
              Ready to Start Your {domain.name} Internship?
            </h2>
            <p className="text-body-lg text-sky-blue mb-8 leading-relaxed">
              Join hundreds of students learning {domain.name.toLowerCase()} through ByteLab's
              structured virtual internship program.
            </p>
            <Link href="/register">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-byte-orange text-white rounded-lg font-semibold hover:bg-[#E5822A] transition-colors"
              >
                Get Started Now
              </motion.button>
            </Link>
          </div>
        </ContentSection>
      </div>
    </>
  );
}


export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'rag' | 'agents' | 'serving' | 'multimodal';
  problemSolved: string;
  keyFunctionality: string[];
  techStack: string[];
  architectureSteps: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: string;
}

export interface ArchitectureStep {
  name: string;
  tech: string;
  description: string;
  details: string;
}

export interface ArchitectureFlow {
  id: string;
  title: string;
  description: string;
  steps: ArchitectureStep[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  highlight: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string[];
}

export interface PublicationItem {
  title: string;
  venue: string;
  year: string;
  type: string;
  description: string;
  link?: string;
}

export interface SpeakingItem {
  title: string;
  event: string;
  year: string;
  location: string;
  description: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
}

export interface ExpertiseItem {
  category: string;
  headline: string;
  icon: string;
  description: string;
  skills: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    secondaryTitle: string;
    shortBio: string;
    extendedBio: string;
    location: string;
    phone: string;
    email: string;
    links: {
      github: string;
      linkedin: string;
      website: string;
      scholar?: string;
    };
    communityRole: string;
    cgpa: string;
  };
  expertise: ExpertiseItem[];
  projects: Project[];
  architectures: ArchitectureFlow[];
  technicalSkills: Record<string, string[]>;
  experience: ExperienceItem[];
  education: EducationItem[];
  achievements: string[];
  certifications: CertificationItem[];
  publications: PublicationItem[];
  talks: SpeakingItem[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: 'Abdullah M',
    title: 'AI & ML Engineer',
    secondaryTitle: 'Generative AI & Data Science Specialist',
    shortBio: 'AI & Data Science student with hands-on experience building Python-based applications, REST APIs, and Generative AI/LLM-powered features, along with supervised & unsupervised ML, prompt engineering, and RAG concepts. Seeking to apply strong programming fundamentals as an AI & ML Engineer building cloud-native AI applications on Google Cloud.',
    extendedBio: 'I am an AI & Data Science engineer with hands-on experience building Python-based applications, REST APIs, and Generative AI/LLM-powered features. My technical foundation spans supervised and unsupervised machine learning, prompt engineering, and Retrieval-Augmented Generation (RAG) architectures.\n\nI have engineered local LLM model serving pipelines using Python/Flask, developed full-stack solutions like MedFlow integrating Google Gemini AI for automated clinical report summarization, and built context-aware RAG pipelines using LangChain and FastAPI.\n\nCurrently pursuing my B.Tech in Artificial Intelligence and Data Science at Dhaanish Ahmed College of Engineering (CGPA 8.91), I have served as a Backend Developer Intern at ORGIN I and Data Science Intern at NSIC Technical Service Centre (MSME). Awarded Best Student of the Year in 2025 and Winner of the Paper Presentation at SIMATS 2026 for an outstanding technical research paper.',
    phone: '+91 7010539310',
    location: 'Karaikal, Puducherry, India',
    email: 'abuofficial735@gmail.com',
    links: {
      github: 'https://github.com/Abuofficial1070',
      linkedin: 'https://linkedin.com/in/abdullah-m-cr7',
      website: 'https://github.com/Abuofficial1070',
      scholar: 'https://github.com/Abuofficial1070'
    },
    communityRole: 'Best Student of the Year 2025 · SIMATS 2026 Winner',
    cgpa: '8.91'
  },

  expertise: [
    {
      category: 'Generative AI & Local LLM Serving',
      headline: 'Local Model Inference, Prompt Engineering & Gemini Integration',
      icon: 'Cpu',
      description: 'Serving local Large Language Models via Python/Flask REST APIs for cloud-independent on-device inference, optimizing prompt engineering for deterministic responses, and integrating frontier models like Google Gemini AI for medical and enterprise workflows.',
      skills: ['Local LLM Serving', 'Gemini AI API', 'Prompt Engineering', 'Hugging Face', 'Flask REST APIs', 'Inference Optimization', 'Agentic AI']
    },
    {
      category: 'RAG & Semantic Retrieval',
      headline: 'Context-Aware Document Intelligence with LangChain',
      icon: 'Search',
      description: 'Architecting Retrieval-Augmented Generation (RAG) pipelines using LangChain, text chunking strategies, dense vector embeddings, and semantic similarity search to generate context-grounded responses that eliminate hallucinations.',
      skills: ['LangChain', 'RAG Pipelines', 'Vector Embeddings', 'Document Chunking', 'Semantic Search', 'FastAPI Backend', 'Context Grounding']
    },
    {
      category: 'Machine Learning & Algorithms',
      headline: 'Supervised, Unsupervised & Deep Neural Architectures',
      icon: 'Database',
      description: 'Designing, evaluating, and deploying classical ML algorithms (Linear/Logistic Regression, Decision Trees, Random Forest, SVM, KNN) alongside Deep Learning and Neural Networks for predictive analytics and classification tasks.',
      skills: ['Supervised ML', 'Unsupervised ML', 'Deep Learning', 'Neural Networks', 'Random Forest', 'SVM', 'Decision Trees', 'KNN']
    },
    {
      category: 'Software & Backend Engineering',
      headline: 'High-Performance REST APIs with Python, Flask & FastAPI',
      icon: 'Server',
      description: 'Building modular, maintainable REST API microservices using Python, FastAPI, and Flask. Implementing Agile Scrum and Spike engineering practices, database connectivity, and structured debugging & troubleshooting.',
      skills: ['Python', 'FastAPI', 'Flask', 'REST API Development', 'Git / GitHub', 'Debugging & Troubleshooting', 'OOP', 'Data Structures']
    },
    {
      category: 'Frontend & Full-Stack Systems',
      headline: 'React, Node.js & Multi-Database Orchestration',
      icon: 'Network',
      description: 'Developing end-to-end full-stack applications with React, Node.js/Express, and dual database systems across MongoDB (NoSQL) and PostgreSQL / SQL (Relational) for medical management and operational platforms.',
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'SQL', 'JavaScript', 'HTML5 / CSS3']
    },
    {
      category: 'Data Science & Cloud-Native Tools',
      headline: 'Data Preprocessing, Docker & Google Cloud Deployment',
      icon: 'Bot',
      description: 'Streamlining data processing and statistical evaluation with Pandas and NumPy (achieving 30% speedup), containerizing applications with Docker, and building cloud-native AI applications targeting Google Cloud.',
      skills: ['Docker', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter Notebook', 'Google Colab', 'Google Cloud AI']
    }
  ],

  projects: [
    {
      id: 'local-llm-integration',
      title: 'Local LLM Model Integration',
      subtitle: 'Python/Flask REST API for Local Prompt-Based Inference',
      category: 'serving' as const,
      problemSolved: 'Organizations and developers frequently need to deploy and experiment with LLMs without relying on expensive external cloud APIs or leaking confidential data. This system enables on-device, prompt-based LLM inference served via a clean REST interface.',
      keyFunctionality: [
        'Integrated and served a local Large Language Model through a Python/Flask REST API',
        'Enabled prompt-based inference on local hardware without reliance on external cloud LLM providers',
        'Applied prompt engineering techniques to structure inputs and outputs for consistent, deterministic model responses',
        'Built modular endpoints for parameter control (temperature, max tokens) and structured JSON formatting'
      ],
      techStack: [
        'Python',
        'Flask',
        'Hugging Face',
        'Local LLM',
        'Prompt Engineering',
        'REST APIs',
        'Docker'
      ],
      architectureSteps: [
        'Client Prompt Submission: External client sends prompt payload to the /generate Flask endpoint',
        'Prompt Structuring: Prompt engineering layer formats inputs with system instructions and guardrail constraints',
        'Local Model Execution: Hugging Face model pipeline executes on-device inference',
        'Response Validation: Output sanitizer validates JSON consistency and strips trailing hallucinated tokens',
        'API Delivery: Delivers structured response with latency and token statistics'
      ],
      githubUrl: 'https://github.com/Abuofficial1070/local-llm-model-integration',
      featured: true,
      status: 'Production-Ready Open Source'
    },
    {
      id: 'medflow-healthcare',
      title: 'MedFlow – AI-Powered Healthcare Management System',
      subtitle: 'Full-Stack Clinical Operations with Gemini AI Report Summarization',
      category: 'agents' as const,
      problemSolved: 'Hospitals and outpatient clinics face severe operational bottlenecks: slow manual patient registration, chaotic queue delays, scattered paper health records, and immense doctor burnout from manual report drafting.',
      keyFunctionality: [
        'Built an AI-powered healthcare management system using React, Node.js/Express, MongoDB, and REST APIs',
        'Supported patient registration, appointment scheduling, queue management, and digital health records (EHR)',
        'Integrated Google Gemini AI (Generative AI/LLM) for automated medical report summarization and workflow automation',
        'Demonstrated applied Generative AI integration into a production-style full-stack healthcare application'
      ],
      techStack: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Gemini AI',
        'REST APIs',
        'JavaScript',
        'HTML/CSS'
      ],
      architectureSteps: [
        'Patient Registration & Queueing: Patients register online; smart queue engine assigns scheduled consultation windows',
        'Clinical Consultation Logging: Doctors record vitals, symptoms, and lab observations in EHR portal',
        'Gemini AI Summarization: Backend dispatches unstructured clinical notes to Google Gemini AI via secure API',
        'Report Generation: Gemini returns clear medical summary, patient-friendly instructions, and prescription outline',
        'MongoDB Record Storage: Persists encrypted record in MongoDB with real-time sync to React dashboard'
      ],
      githubUrl: 'https://github.com/Abuofficial1070/Med-Flow',
      featured: true,
      status: 'Full-Stack Deployed'
    },
    {
      id: 'langchain-rag-chatbot',
      title: 'LangChain RAG Chatbot',
      subtitle: 'Context-Aware Document Retrieval & QA with FastAPI',
      category: 'rag' as const,
      problemSolved: 'Standard foundation LLMs hallucinate when asked domain-specific or proprietary enterprise questions. This project creates an end-to-end Retrieval-Augmented Generation system that grounds all answers in verified source documentation.',
      keyFunctionality: [
        'Developed a Retrieval-Augmented Generation (RAG) chatbot using LangChain with document processing, chunking, embeddings, and semantic retrieval',
        'Built a FastAPI backend to serve the RAG pipeline through APIs with modular components',
        'Implemented document handling, dense vector retrieval, and LLM-based context-aware response generation',
        'Guaranteed zero-hallucination factual synthesis strictly verified against uploaded source documents'
      ],
      techStack: [
        'LangChain',
        'FastAPI',
        'Python',
        'Vector Embeddings',
        'Semantic Search',
        'RAG',
        'Hugging Face'
      ],
      architectureSteps: [
        'Document Ingestion & Chunking: Ingests documents and splits text using recursive character chunking with overlap',
        'Vector Embedding Computation: Converts chunks into dense high-dimensional vectors stored in vector index',
        'Query Semantic Matching: Embeds incoming user query and retrieves top-k most relevant passage chunks',
        'Context Injection: Synthesizes augmented prompt containing retrieved excerpts and question',
        'FastAPI Response Generation: LLM generates verified, context-grounded response delivered over REST API'
      ],
      githubUrl: 'https://github.com/Abuofficial1070/langchain-rag-chatbot',
      featured: true,
      status: 'Active Repository'
    }
  ],

  architectures: [
    {
      id: 'local-llm-pipeline',
      title: 'Local LLM Serving & Prompt Pipeline',
      description: 'End-to-end architecture for serving local foundation models through lightweight Flask REST microservices.',
      steps: [
        {
          name: '1. Inbound REST Request',
          tech: 'Python / Flask REST API',
          description: 'Client sends prompt payload, model selection, temperature, and token parameters via HTTP POST.',
          details: 'Accepts structured JSON requests, validates parameter bounds (temperature 0.0-1.0, max_tokens), and routes to inference scheduler.'
        },
        {
          name: '2. Prompt Engineering Layer',
          tech: 'Prompt Template Engine',
          description: 'Structures raw user input into specialized system instructions and few-shot formatting.',
          details: 'Enforces system persona, task instructions, output schemas, and guardrail constraints to prevent output drift.'
        },
        {
          name: '3. Local Model Inference Execution',
          tech: 'Hugging Face / On-Premise GPU/CPU',
          description: 'Executes forward-pass token generation using local model weights without cloud dependencies.',
          details: 'Runs inference directly on local runtime, ensuring strict privacy, zero external API costs, and low deterministic latency.'
        },
        {
          name: '4. Response Sanitization & Delivery',
          tech: 'JSON Validator & REST Response',
          description: 'Parses generated token stream, verifies termination conditions, and returns structured response.',
          details: 'Validates output completeness, strips undesirable artifacts, formats JSON response, and logs token throughput metrics.'
        }
      ]
    },
    {
      id: 'medflow-gemini-pipeline',
      title: 'MedFlow Healthcare & Gemini AI Summarizer',
      description: 'Clinical operations platform orchestrating React, Node.js/Express, MongoDB, and Google Gemini AI.',
      steps: [
        {
          name: '1. Patient Registration & Queueing',
          tech: 'React & Node.js / Express',
          description: 'Patient check-in, doctor appointment booking, and real-time waiting queue assignment.',
          details: 'Frontend React UI interfaces with Express REST endpoints to manage queue priority and appointment slots.'
        },
        {
          name: '2. Clinical Note Recording',
          tech: 'Digital Health Records (EHR)',
          description: 'Physician records observations, lab reports, symptoms, and diagnosis into digital patient file.',
          details: 'EHR input interface captures complex unstructured text alongside structured vitals and medical history.'
        },
        {
          name: '3. Gemini AI Workflow Automation',
          tech: 'Google Gemini AI (LLM)',
          description: 'Dispatches clinical notes to Google Gemini AI for automated medical report summarization.',
          details: 'Gemini Generative AI analyzes complex clinical terminology, extracting key diagnoses and drafting discharge summaries.'
        },
        {
          name: '4. Encrypted Persistence & Portal Sync',
          tech: 'MongoDB Database',
          description: 'Saves validated clinical summaries and prescriptions with patient historical records.',
          details: 'Persists structured JSON documents in MongoDB, instantly updating the patient dashboard and doctor records.'
        }
      ]
    },
    {
      id: 'langchain-rag-pipeline',
      title: 'LangChain & FastAPI RAG Pipeline',
      description: 'Document intelligence workflow with chunking, dense embeddings, vector retrieval, and FastAPI serving.',
      steps: [
        {
          name: '1. Document Ingestion & Chunking',
          tech: 'LangChain Document Loaders',
          description: 'Loads unstructured text/PDF documents and divides them into semantically coherent overlapping chunks.',
          details: 'RecursiveCharacterTextSplitter maintains paragraph boundaries while generating 500-token chunks with 50-token overlap.'
        },
        {
          name: '2. Vector Embedding Computation',
          tech: 'Hugging Face Embeddings',
          description: 'Transforms text chunks into dense mathematical vector representations.',
          details: 'Computes high-dimensional dense vector embeddings that capture deep semantic similarity across vocabulary variations.'
        },
        {
          name: '3. Semantic Similarity Match',
          tech: 'Vector Similarity Engine',
          description: 'Embeds user query and performs nearest-neighbor search across indexed document vectors.',
          details: 'Calculates cosine similarity to surface the top-k most relevant document excerpts matching the query context.'
        },
        {
          name: '4. Grounded Context Synthesis',
          tech: 'FastAPI & LLM Generator',
          description: 'Injects retrieved passages into LLM context window to generate verified, context-aware answers.',
          details: 'FastAPI async route serves the generation pipeline, enforcing strict citation and zero hallucination.'
        }
      ]
    }
  ],

  technicalSkills: {
    'Programming Languages': [
      'Python',
      'SQL',
      'Basic Object-Oriented Programming (OOP)',
      'Basic Data Structures & Algorithms',
      'JavaScript'
    ],
    'AI & Machine Learning': [
      'Machine Learning (Supervised & Unsupervised)',
      'Deep Learning',
      'Neural Networks',
      'Large Language Models (LLMs)',
      'Generative AI',
      'Retrieval-Augmented Generation (RAG)',
      'Prompt Engineering',
      'Agentic AI'
    ],
    'Machine Learning Algorithms': [
      'Linear Regression',
      'Logistic Regression',
      'Decision Trees',
      'Random Forest',
      'Support Vector Machines (SVM)',
      'K-Nearest Neighbors (KNN)'
    ],
    'Software Engineering': [
      'Git / GitHub',
      'REST API Development',
      'Flask',
      'FastAPI',
      'Debugging & Troubleshooting',
      'Scrum & Spike Practices'
    ],
    'Frontend & Databases': [
      'React',
      'Node.js / Express',
      'HTML5',
      'CSS3',
      'MongoDB',
      'PostgreSQL',
      'SQL Databases'
    ],
    'Tools & Platforms': [
      'Docker',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Jupyter Notebook',
      'Google Colab',
      'Hugging Face',
      'LangChain'
    ]
  },

  experience: [
    {
      role: 'Backend Developer Intern',
      organization: 'ORGIN I',
      period: 'Mar 2026 – Jun 2026',
      location: 'India',
      type: 'Internship',
      highlight: 'Engineered Python REST APIs and managed database operations with Scrum & Spike agility',
      responsibilities: [
        'Developed and maintained backend services and REST APIs using Python, and SQL, supporting web application functionality and database operations.',
        'Collaborated with the engineering team using Scrum and Spike practices for rapid iteration and technical problem-solving.',
        'Structured database schemas and optimized API endpoints for responsive, reliable client application performance.'
      ],
      technologies: ['Python', 'SQL', 'REST APIs', 'Backend Development', 'Scrum', 'Spike Practices', 'Git']
    },
    {
      role: 'Data Science Intern',
      organization: 'NSIC Technical Service Centre (MSME)',
      period: 'Mar 2025 – Jun 2025',
      location: 'Chennai, India',
      type: 'Internship',
      highlight: 'Boosted data processing efficiency by 30% and cut analysis turnaround time by 25%',
      responsibilities: [
        'Improved data processing efficiency by 30% and reduced analysis time by 25% through data cleaning, preprocessing, and automated visualization workflows using Python, Pandas, and NumPy.',
        'Generated actionable insights using statistical analysis and machine learning model evaluation techniques.',
        'Built automated exploratory data analysis (EDA) scripts and structured evaluation metrics for model performance.'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Statistical Analysis', 'Machine Learning', 'Data Preprocessing']
    }
  ],

  education: [
    {
      degree: 'B.Tech - Artificial Intelligence And Data Science (AI&DS)',
      institution: 'Dhaanish Ahmed College of Engineering',
      period: '2023 - Present',
      location: 'Chennai, Tamil Nadu, India',
      details: [
        'CGPA: 8.91 — Exceptional academic performance across AI, Machine Learning, and Data Science curricula.',
        'Awarded Best Student of the Year in 2025 for academic excellence and overall performance.',
        'Winner, Paper Presentation – SIMATS 2026, for an outstanding technical research paper.',
        'Hackathon Participant, Econexus AI Team (2024).'
      ]
    },
    {
      degree: 'Higher Secondary Education (MPC)',
      institution: 'SRVS National Higher Secondary School',
      period: '2021 - 2023',
      location: 'Karaikal, Puducherry, India',
      details: [
        'Completed higher secondary education in Mathematics, Physics, and Chemistry (MPC).',
        'Developed strong foundations in algorithmic thinking, calculus, and mathematical modeling.'
      ]
    }
  ],

  achievements: [
    'Awarded Best Student of the Year in 2025 for academic excellence and overall performance.',
    'Winner, Paper Presentation – SIMATS 2026, for an outstanding technical research paper.',
    'Hackathon Participant, Econexus AI Team (2024).'
  ],

  certifications: [
    {
      name: 'Aptis English (B2 Level)',
      issuer: 'British Council',
      year: '2025'
    },
    {
      name: 'Data Science & Analytics',
      issuer: 'Accenture',
      year: '2024'
    }
  ],

  publications: [
    {
      title: 'Applied Generative AI & Cloud-Native Machine Learning Deployments',
      venue: 'SIMATS 2026 Technical Paper Presentation',
      year: '2026',
      type: 'Winner - Outstanding Technical Research Paper',
      description: 'Awarded 1st Place for research and technical paper presentation on integrating generative AI, local LLM serving, and automated clinical summarization pipelines.',
      link: 'https://github.com/Abuofficial1070'
    }
  ],

  talks: [
    {
      title: 'Context-Aware RAG Pipelines & Local LLM Serving Architectures',
      event: 'SIMATS 2026 Technical Presentation',
      year: '2026',
      location: 'Chennai, India',
      description: 'Presented technical architecture for low-latency RAG chatbots using LangChain and FastAPI; awarded Winner for best technical paper presentation.'
    },
    {
      title: 'Econexus AI: Intelligent Sustainability Hackathon',
      event: 'Econexus AI Hackathon',
      year: '2024',
      location: 'India',
      description: 'Collaborated as part of the Econexus AI Team building machine learning solutions for environmental analytics.'
    }
  ]
};

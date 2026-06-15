export const profile = {
    name: "Darshan R",
    role: "AI Systems Engineer & CS Undergraduate",
    shortBio:
        "Computer Science undergraduate at IIIT Sri City focused on AI product development, retrieval-augmented generation, and applied machine learning systems. I build end-to-end AI workflows spanning data ingestion, prompting, retrieval, reranking, and citation-grounded generation.",
    aboutBio:
        "Interested in narrative AI systems, prompt design, AI knowledge operations, and shipping reliable AI features at product scale. I optimize for measurable impact, clean design, and reproducible experimentation.",
    blurb:
        "I design and ship intelligent systems where research-grade ML meets production-ready engineering. My work spans retrieval systems, applied deep learning, reinforcement learning, and high-performance product interfaces.",
    location: "Andhra Pradesh, India",
    phone: "+91-7904599205",
    email: "darshan5154896@gmail.com",
    githubUsername: "DRDev-coder",
    githubUrl: "https://github.com/DRDev-coder",
    linkedinUrl:
        "https://www.linkedin.com/in/darshan-r-77b00b286",
    resumeFileName: "resume__POcketFm_Full.pdf",
    resumeUrl: "/resume/resume__POcketFm_Full.pdf",
    profileImage: "/images/profile-avatar.svg",
    ogImage: "/images/og-banner.svg",
};

export const navItems = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#github", label: "GitHub" },
    { href: "#research", label: "Research" },
    { href: "#contact", label: "Contact" },
];

export const education = [
    {
        institution: "Indian Institute of Information Technology (IIIT), Sri City",
        location: "Andhra Pradesh, India",
        degree: "Bachelor of Technology — Computer Science and Engineering",
        period: "2023 — 2027",
        grade: "CGPA: 9.13",
    },
    {
        institution: "Narayana E-Techno School",
        location: "India",
        degree: "Higher Secondary Education",
        period: "2017 — 2023",
        grade: "Grade: 94% | Percentile: 96%",
    },
];

export const selectedProjects = [
    {
        slug: "ask-my-docs-rag",
        title: "Ask My Docs — Citation-Aware RAG System",
        category: "Applied AI · RAG",
        description:
            "Production-style RAG pipeline combining BM25, vector retrieval, hybrid fusion, and cross-encoder reranking for accurate document Q&A with citation-aware prompting.",
        highlights: [
            "BM25 + vector hybrid fusion with cross-encoder reranking",
            "Citation-aware prompting with validation and retry logic",
            "Multi-LLM support (OpenAI/Ollama/Gemini)",
            "Evaluation-ready architecture with Ragas framework",
        ],
        stack: ["Python", "FastAPI", "Streamlit", "ChromaDB", "LangChain"],
        githubUrl: "https://github.com/DRDev-coder/production-rag-system",
        gradient: "from-violet-500 to-purple-600",
        icon: "Search",
    },
    {
        slug: "rag-code-workspace",
        title: "RAG Code Workspace — AI Code Assistant",
        category: "Full-Stack AI · Developer Tools",
        description:
            "VS Code-like AI workspace to upload/index repositories, ask codebase questions, and generate file-level explanations with citations.",
        highlights: [
            "Dependency-aware chunking and retrieval pipelines",
            "Chat history persistence and citation click-through",
            "Upload management with indexed repo workflows",
            "File-level code explanations with exact range linking",
        ],
        stack: ["Next.js", "React", "Node.js", "Express", "ChromaDB"],
        githubUrl: "https://github.com/DRDev-coder/ai_code_workspace",
        gradient: "from-cyan-500 to-blue-600",
        icon: "Code",
    },
    {
        slug: "safelane-rl-driving",
        title: "SafeLane — RL for Autonomous Driving",
        category: "Reinforcement Learning · Autonomous Systems",
        description:
            "Safety-aware DQN agent with adaptive reward formulation and scenario-based evaluation for autonomous lane-changing in Highway-env simulation.",
        highlights: [
            "Deep Q-Network with Prioritized Experience Replay",
            "Reward shaping with safety-aware formulation",
            "5000+ episode policy evaluation and stability analysis",
            "Double DQN for reduced overestimation bias",
        ],
        stack: ["Python", "PyTorch", "Gymnasium", "Highway-env", "DQN"],
        githubUrl: "https://github.com/DRDev-coder/RL_Agent_AV",
        gradient: "from-emerald-500 to-teal-600",
        icon: "Car",
    },
    {
        slug: "stampede-region-prediction",
        title: "Stampede Region Prediction — Crowd Risk Analytics",
        category: "Deep Learning · Computer Vision",
        description:
            "Deep learning pipeline for crowd density estimation and stampede risk detection from image and video streams using Dual-Head ResNet-34 FPN.",
        highlights: [
            "Dual-Head ResNet-34 FPN architecture",
            "Temporal risk analysis over grid regions",
            "Real-time crowd density estimation from video",
            "Rapid accumulation and high-risk zone detection",
        ],
        stack: ["Python", "PyTorch", "OpenCV", "ResNet-34", "FPN"],
        githubUrl: "https://github.com/DRDev-coder/Stampede_Region_Prediction",
        gradient: "from-rose-500 to-red-600",
        icon: "AlertTriangle",
    },
    {
        slug: "ssl-representation-benchmark",
        title: "SSL Representation Benchmark",
        category: "Representation Learning · Research",
        description:
            "Comprehensive benchmarking of SimCLR, MoCo v2, and BYOL across natural and medical image datasets for self-supervised representation quality.",
        highlights: [
            "SimCLR, MoCo v2, BYOL comparison framework",
            "Evaluation on CIFAR-100 and medical imaging datasets",
            "Linear evaluation protocol for representation quality",
            "Contrastive vs. non-contrastive learning analysis",
        ],
        stack: ["PyTorch", "SimCLR", "MoCo v2", "BYOL", "CIFAR-100"],
        githubUrl: "https://github.com/DRDev-coder/ssl-representation-benchmark",
        gradient: "from-amber-500 to-orange-600",
        icon: "Brain",
    },
    {
        slug: "cargolink-logistics",
        title: "CargoLink — Freight Logistics Platform",
        category: "Full-Stack · Product Engineering",
        description:
            "End-to-end freight logistics platform connecting shippers with carriers, featuring real-time tracking, booking management, and route optimization.",
        highlights: [
            "Full-stack MERN architecture",
            "Real-time shipment tracking and booking",
            "Role-based access for shippers and carriers",
            "RESTful API with MongoDB data layer",
        ],
        stack: ["React", "Node.js", "Express", "MongoDB", "REST API"],
        githubUrl: "https://github.com/CargoLink-FSD/CargoLink",
        gradient: "from-blue-500 to-indigo-600",
        icon: "Truck",
    },
];

export const skillGroups = [
    {
        title: "AI / ML",
        icon: "Brain",
        skills: ["PyTorch", "TensorFlow", "OpenCV", "Reinforcement Learning", "CNNs", "RAG Pipelines"],
    },
    {
        title: "LLM & Retrieval",
        icon: "Search",
        skills: ["Prompt Engineering", "Hybrid Retrieval", "Reranking", "Citation Grounding", "ChromaDB", "LangChain"],
    },
    {
        title: "Languages",
        icon: "Terminal",
        skills: ["Python", "C++", "C", "JavaScript", "TypeScript"],
    },
    {
        title: "Backend",
        icon: "ServerCog",
        skills: ["FastAPI", "Node.js", "Express.js", "REST APIs"],
    },
    {
        title: "Frontend",
        icon: "LayoutTemplate",
        skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS", "Streamlit"],
    },
    {
        title: "Tools & Ops",
        icon: "Wrench",
        skills: ["Git", "GitHub", "Docker", "Vite", "Ollama", "Linux"],
    },
];

export const experienceTimeline = [
    {
        period: "May 2025 — June 2025",
        title: "Research Intern",
        organization: "National Institute of Technology (NIT), Trichy",
        location: "Tamil Nadu, India",
        impact: [
            "Developed an autonomous lane-changing agent using Deep Q-Networks (DQN) in Highway-env to study sequential decision-making under dynamic traffic conditions",
            "Designed reward shaping and evaluated policies over 5000+ episodes using Double DQN with Prioritized Experience Replay",
            "Collaborated with research teammates to document methods and empirical findings for a paper under review",
        ],
    },
    {
        period: "Sep 2024 — Present",
        title: "Core Member — Nexsync Smart Transportation Club",
        organization: "IIIT Sri City",
        location: "Andhra Pradesh, India",
        impact: [
            "Prepared event materials and coordinated hackathon execution across technical and non-technical student teams",
            "Tracked progress and ownership across workstreams to improve team visibility and execution reliability",
            "Built a trip advisor web product with Node.js and React for personalized planning workflows",
        ],
    },
];

export const leadership = {
    languages: "English, Telugu, Tamil (Native)",
    awards: "Football Winner at Abhisarga (IIIT Sricity) 2024 | Football Runner-Up at Sanyog (IIT Tirupati) 2024",
    headboy: "Head Boy, Narayana E-Techno School (Academic Year 2022–23)",
};

export const pinnedRepos = [
    "production-rag-system",
    "ai_code_workspace",
    "RL_Agent_AV",
    "Stampede_Region_Prediction",
    "ssl-representation-benchmark",
    "CargoLink",
];

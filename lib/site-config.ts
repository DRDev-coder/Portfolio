export const profile = {
    name: "Darshan R.",
    role: "Computer Science Student | AI & Systems Enthusiast",
    shortBio:
        "I build AI systems with strong engineering fundamentals, turning research ideas into production-ready products.",
    aboutBio:
        "Focused on self-supervised learning, retrieval systems, and scalable full-stack architecture. I optimize for measurable impact, clean design, and reproducible experimentation.",
    blurb:
        "I design and ship intelligent systems where research-grade ML meets production-ready engineering. My work spans retrieval systems, applied deep learning, and high-performance product interfaces.",
    location: "Singapore",
    email: "darshan5154896@gmail.com",
    githubUsername: "DRDev-coder",
    githubUrl: "https://github.com/DRDev-coder",
    linkedinUrl:
        "https://www.linkedin.com/in/darshan-r-77b00b286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    resumeFileName: "Darshan_R_Resume_v2026_04.pdf",
    resumeUrl: "/resume/Darshan_R_Resume_v2026_04.pdf",
    profileImage: "/images/profile-avatar.svg",
    ogImage: "/images/og-banner.svg",
};

export const navItems = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#github", label: "GitHub" },
    { href: "/blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
    { href: "/now", label: "Now" },
];

export const selectedProjects = [
    {
        slug: "simclr-self-supervised-cifar100",
        title: "Self-Supervised Representation Learning with SimCLR",
        category: "Representation Learning",
        problem:
            "High-performing vision models usually need expensive labels, creating a bottleneck for scaling ML systems.",
        approach:
            "Implemented SimCLR contrastive pretraining on CIFAR-100 with strong augmentations, NT-Xent loss, and linear evaluation.",
        metricLabel: "Linear eval accuracy",
        metricValue: "86.7%",
        stack: ["PyTorch", "SimCLR", "ResNet-18", "CIFAR-100"],
        keyResults: [
            "86.7% accuracy on CIFAR-100 with label-free pretraining",
            "Stable representation quality across 200 training epochs",
            "Downstream linear classifier outperformed non-contrastive baseline",
        ],
    },
    {
        slug: "ai-research-assistant",
        title: "AI Research Assistant",
        category: "Applied AI Systems",
        problem:
            "Researchers lose hours navigating fragmented papers, notes, and code references.",
        approach:
            "Built a retrieval-augmented knowledge layer with chunking, hybrid search, and citation grounding.",
        metricLabel: "Time-to-insight",
        metricValue: "42% faster",
        stack: ["Next.js", "FastAPI", "PostgreSQL", "LangChain", "OpenAI"],
        keyResults: [
            "42% reduction in literature review time across pilot users",
            "Citation precision improved to 91% in evaluation set",
            "Average query latency held below 1.9s for 10k-document corpus",
        ],
    },
    {
        slug: "distributed-systems-observability",
        title: "Distributed Systems Observability Suite",
        category: "Reliability Engineering",
        problem:
            "Student teams struggled to debug flaky services with poor tracing visibility.",
        approach:
            "Implemented end-to-end telemetry and anomaly alerts using OpenTelemetry and Grafana.",
        metricLabel: "Mean time to recovery",
        metricValue: "14 min",
        stack: ["Go", "Kubernetes", "Prometheus", "Grafana"],
        keyResults: [
            "MTTR improved from 47 minutes to 14 minutes",
            "Alert precision increased from 63% to 88%",
            "Failure triage handoff time reduced by 52%",
        ],
    },
    {
        slug: "vision-based-attendance-intelligence",
        title: "Vision-Based Attendance Intelligence",
        category: "Computer Vision",
        problem:
            "Manual attendance workflows are error-prone and consume class time.",
        approach:
            "Designed a privacy-aware face-recognition pipeline with confidence thresholding and audit logs.",
        metricLabel: "Recognition precision",
        metricValue: "96.8%",
        stack: ["PyTorch", "ONNX", "Node.js", "Docker"],
        keyResults: [
            "96.8% precision in real classroom lighting conditions",
            "Attendance completion time dropped to under 2 minutes",
            "End-to-end audit trail added for policy compliance",
        ],
    },
];

export const skillGroups = [
    {
        title: "AI / ML",
        icon: "Brain",
        skills: ["PyTorch", "TensorFlow", "Scikit-learn", "RAG", "MLOps", "Evaluation"],
    },
    {
        title: "Backend",
        icon: "ServerCog",
        skills: ["Node.js", "FastAPI", "PostgreSQL", "Redis", "REST", "gRPC"],
    },
    {
        title: "Frontend",
        icon: "LayoutTemplate",
        skills: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "React Query", "MDX"],
    },
    {
        title: "Tools",
        icon: "Wrench",
        skills: ["Docker", "Kubernetes", "GitHub Actions", "OpenTelemetry", "Grafana", "Linux"],
    },
];

export const experienceTimeline = [
    {
        period: "2025 - Present",
        title: "AI Systems Engineer (Projects + Research)",
        organization: "Independent / Academic Collaborations",
        impact: [
            "Designed and shipped retrieval-augmented systems with measurable quality gains",
            "Led architecture decisions around indexing, ranking, and observability",
            "Documented experiment learnings through reproducible technical writeups",
        ],
    },
    {
        period: "2024 - 2025",
        title: "Full-Stack Product Builder",
        organization: "Student Engineering Teams",
        impact: [
            "Delivered high-velocity prototypes from problem framing to deployment",
            "Introduced telemetry and incident debugging practices across services",
            "Improved team output with clean component systems and shared UI patterns",
        ],
    },
    {
        period: "2023 - 2024",
        title: "Systems and Programming Foundations",
        organization: "Computer Science Curriculum",
        impact: [
            "Built depth in algorithms, systems design, and software engineering fundamentals",
            "Applied theory to practical builds in ML and distributed systems",
            "Established a research-first workflow with continuous learning artifacts",
        ],
    },
];

export const pinnedRepos = [
    "ssl-representation-benchmark",
    "production-rag-system",
    "CargoLink",
];

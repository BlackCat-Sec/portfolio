// Edit this file to update portfolio copy, links, project cards, and resume paths.

export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "achievements", label: "Achievements" },
  { id: "social", label: "Connect" },
  { id: "contact", label: "Contact" },
];

export const portfolio = {
  brand: "Mokshith H S",
  name: "Mokshith H S",
  title: "AIML Student | Cybersecurity Enthusiast | AI Developer",
  tagline: "Building secure, intelligent, and real-world technology solutions.",
  location: "Hassan, Karnataka, India",
  education: "AIML student at Bahubali College of Engineering, Shravanabelagola",
  about:
    "I am an AIML engineering student at Bahubali College of Engineering, focused on cybersecurity, AI/ML, Linux, networking, secure web development, and practical real-world projects. I enjoy building security tools, AI-based apps, and modern web platforms.",
  mission:
    "Cybersecurity-focused AIML student building secure, intelligent, and real-world digital solutions.",
  availability: {
    headline: "Open to internships, project collaboration, and security-focused opportunities.",
    note: "Best current response path: LinkedIn or GitHub while direct email and a final resume PDF can be added later.",
    badges: ["Internship ready", "GitHub-backed work", "Security-first builder"],
  },
  profileHighlights: [
    {
      title: "Education",
      value: "Bahubali College of Engineering",
      detail: "AIML engineering track with real-world project focus.",
      icon: "graduation",
    },
    {
      title: "Location",
      value: "Hassan, Karnataka",
      detail: "Available for internships, collaborations, and remote teamwork.",
      icon: "location",
    },
    {
      title: "Professional Identity",
      value: "Mokshith H S",
      detail: "Presented with a cybersecurity-first visual identity and practical engineering depth.",
      icon: "shield",
    },
    {
      title: "Current Mode",
      value: "Learning, building, securing",
      detail: "Focused on AI automation, Linux, networking, and secure apps.",
      icon: "spark",
    },
  ],
  heroMetrics: [
    { label: "Public Projects", value: "04" },
    { label: "Certifications", value: "05" },
    { label: "Focus Tracks", value: "06+" },
    { label: "Opportunity Status", value: "Open" },
  ],
  focusAreas: [
    { label: "AI/ML Security", value: 88, icon: "brain" },
    { label: "Threat Detection", value: 82, icon: "radar" },
    { label: "Secure Development", value: 85, icon: "shield" },
    { label: "Automation", value: 80, icon: "bot" },
  ],
  socialLinks: {
    github: "https://github.com/BlackCat-Sec",
    linkedin: "https://www.linkedin.com/in/mokshith-hs",
  },
  resume: {
    file: "Mokshith-HS-Resume-Placeholder.txt",
    downloadName: "Mokshith-HS-Resume-Placeholder.txt",
  },
};

export const skillCategories = [
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    icon: "shield",
    summary: "Security-first thinking across networks, operating systems, and secure product design.",
    detail:
      "Hands-on interest in protecting systems, studying attack paths, and building safer digital experiences with practical defensive awareness.",
    items: [
      "Network Security",
      "Ethical Hacking",
      "Linux Security",
      "Threat Analysis",
      "Phishing Detection",
      "Malware Basics",
    ],
    highlights: ["Traffic visibility", "Secure architecture", "Threat-aware workflows"],
  },
  {
    id: "aiml",
    label: "AI / ML",
    icon: "brain",
    summary: "AI-assisted problem solving with a focus on useful, applied learning and automation.",
    detail:
      "Exploring models, pipelines, and automation ideas that help solve real-world problems in agriculture, security, and modern digital products.",
    items: ["Python", "Machine Learning", "Deep Learning Basics", "AI Automation"],
    highlights: ["Model experimentation", "Applied ML", "Workflow automation"],
  },
  {
    id: "web",
    label: "Web Development",
    icon: "globe",
    summary: "Modern frontends and secure web application flows with clean developer experience.",
    detail:
      "Building responsive interfaces, lightweight APIs, and polished user experiences that can grow into practical portfolio-ready products.",
    items: ["HTML", "CSS", "JavaScript", "React", "FastAPI", "Tailwind CSS"],
    highlights: ["Responsive UI", "Reusable components", "Security-minded builds"],
  },
  {
    id: "tools",
    label: "Tools & Platforms",
    icon: "terminal",
    summary: "Developer and infrastructure tools that support experimentation, deployment, and iteration.",
    detail:
      "Comfortable working across Linux environments, cloud services, source control, and productivity tooling that accelerates secure project delivery.",
    items: [
      "Git",
      "GitHub",
      "Kali Linux",
      "Linux",
      "VS Code",
      "Oracle Cloud",
      "Google Play Console",
    ],
    highlights: ["Version control", "Cloud-ready workflow", "Developer tooling"],
  },
];

export const featuredProjects = [
  {
    title: "CipherShield Cyber Scanner",
    status: "Public",
    tone: "cyan",
    category: "Security Scanner",
    role: "Full-stack security build",
    summary:
      "HTML/CSS + FastAPI cybersecurity scanner focused on SSL/TLS checks and domain intelligence workflows for practical security analysis.",
    challenge:
      "Create a security-focused experience that feels accessible to users while still exposing useful scanning workflows and infrastructure signals.",
    outcome:
      "Demonstrates secure product thinking across interface design, backend-driven checks, and recruiter-friendly public code visibility.",
    features: [
      "Combines frontend usability with backend security scanning workflows",
      "Built around domain intelligence and SSL/TLS inspection use cases",
      "Strong public showcase of security-focused web engineering",
    ],
    stack: ["FastAPI", "HTML", "CSS", "Cybersecurity"],
    proofPoints: [
      { label: "Primary language", value: "Python" },
      { label: "Delivery style", value: "Web app workflow" },
      { label: "Focus", value: "SSL/TLS + domain intelligence" },
    ],
    footer: "Live public repository from your GitHub profile with direct recruiter access to code and README.",
    actions: [
      {
        label: "Open Repo",
        href: "https://github.com/BlackCat-Sec/ciphershield-cyber-scanner",
      },
      {
        label: "Read README",
        href: "https://github.com/BlackCat-Sec/ciphershield-cyber-scanner#readme",
      },
    ],
  },
  {
    title: "Agri-care",
    status: "Public",
    tone: "violet",
    category: "AI-inspired product build",
    role: "Student builder / product thinker",
    summary:
      "A smart agriculture project designed to help farmers move a step forward with practical support around modern agriculture and decision making.",
    challenge:
      "Translate practical farming support ideas into a simple digital product direction that reflects real-world usefulness rather than demo-only UI.",
    outcome:
      "Shows that your portfolio is not limited to cybersecurity alone and that you can apply AIML thinking to real user problems.",
    features: [
      "Public GitHub build aligned with your AIML and real-world problem solving focus",
      "Shows interest in agriculture support and practical digital impact",
      "A strong example of AI/ML-inspired student project direction",
    ],
    stack: ["AI/ML", "HTML", "Automation", "Agritech"],
    proofPoints: [
      { label: "Primary language", value: "HTML" },
      { label: "Delivery style", value: "Problem-led concept" },
      { label: "Focus", value: "Smart agriculture support" },
    ],
    footer: "Live public repository from your GitHub profile with a practical, socially useful product direction.",
    actions: [
      { label: "Open Repo", href: "https://github.com/BlackCat-Sec/Agri-care" },
      { label: "Read README", href: "https://github.com/BlackCat-Sec/Agri-care#readme" },
    ],
  },
  {
    title: "Exploit Verifier",
    status: "Public",
    tone: "blue",
    category: "Security CLI",
    role: "Security automation builder",
    summary:
      "A safe CVE exposure verification CLI that uses Docker-isolated benign probes to validate security exposure without turning the workflow into unsafe exploitation.",
    challenge:
      "Design a verification workflow that keeps the focus on safe defensive validation rather than crossing into unsafe exploit behavior.",
    outcome:
      "A strong cybersecurity portfolio signal because it balances practical usefulness, safety boundaries, and automation thinking.",
    features: [
      "Security-oriented CLI built around controlled and safer verification",
      "Useful public project for showing defensive validation thinking",
      "Strong fit for cybersecurity portfolios and internship applications",
    ],
    stack: ["Python", "CLI", "Docker", "CVE Validation"],
    proofPoints: [
      { label: "Primary language", value: "Python" },
      { label: "Delivery style", value: "CLI + Docker isolation" },
      { label: "Focus", value: "Safe CVE verification" },
    ],
    footer: "Live public repository from your GitHub profile with a clear defensive-security positioning.",
    actions: [
      { label: "Open Repo", href: "https://github.com/BlackCat-Sec/exploit-verifier" },
      {
        label: "Read README",
        href: "https://github.com/BlackCat-Sec/exploit-verifier#readme",
      },
    ],
  },
  {
    title: "Safe Security Scanner",
    status: "Public",
    tone: "emerald",
    category: "Supply-chain security tool",
    role: "Security tooling builder",
    summary:
      "A production-ready Python CLI for scanning repositories, PyPI packages, and SBOMs for security risk across supply-chain-aware workflows.",
    challenge:
      "Cover multiple software supply-chain surfaces in a way that stays useful for developers reviewing package and repository risk.",
    outcome:
      "Adds a mature security-automation signal to the portfolio by showing awareness of modern software supply-chain concerns.",
    features: [
      "Focused on practical security risk review for code and package ecosystems",
      "Showcases Python tooling around software and supply-chain security",
      "Clear public example of useful security automation work",
    ],
    stack: ["Python", "CLI", "SBOM", "Supply Chain Security"],
    proofPoints: [
      { label: "Primary language", value: "Python" },
      { label: "Delivery style", value: "Production-ready CLI" },
      { label: "Focus", value: "Repo, PyPI, and SBOM scanning" },
    ],
    footer: "Live public repository from your GitHub profile that strengthens your supply-chain security narrative.",
    actions: [
      { label: "Open Repo", href: "https://github.com/BlackCat-Sec/safe-security-scanner" },
      {
        label: "Read README",
        href: "https://github.com/BlackCat-Sec/safe-security-scanner#readme",
      },
    ],
  },
];

export const certifications = [
  {
    title: "Google Foundation of Cybersecurity",
    issuer: "Google",
    detail: "Core security foundations and professional cybersecurity orientation.",
    focus: "Foundational security concepts",
  },
  {
    title: "Google Play It Safe: Manage Security Risks",
    issuer: "Google",
    detail: "Risk management thinking and practical security awareness.",
    focus: "Risk management",
  },
  {
    title: "Google Tools of the Trade: Linux and SQL",
    issuer: "Google",
    detail: "Linux and SQL fundamentals for technical security workflows.",
    focus: "Linux and SQL",
  },
  {
    title: "Google Connect and Protect: Networks and Network Security",
    issuer: "Google",
    detail: "Networking concepts and protection strategies for modern systems.",
    focus: "Networking and defense",
  },
  {
    title: "Cisco Introduction to Cybersecurity",
    issuer: "Cisco",
    detail: "Foundational cybersecurity learning with industry-recognized framing.",
    focus: "Industry fundamentals",
  },
];

export const achievements = [
  {
    title: "Hackathon Participation",
    detail: "Hands-on hackathon participation with project-building experience under real time constraints.",
    icon: "trophy",
    signal: "Builds under pressure",
  },
  {
    title: "Dyashin / DSEdify Opportunity",
    detail: "Selected for an employment opportunity through the Dyashin / DSEdify collaboration.",
    icon: "briefcase",
    signal: "Professional selection signal",
  },
  {
    title: "Continuous Security Learning",
    detail: "Active learner in cybersecurity, Linux, networking, and AI with a practical builder mindset.",
    icon: "spark",
    signal: "Consistent growth mindset",
  },
];

export const socialCards = [
  {
    label: "GitHub",
    value: "github.com/BlackCat-Sec",
    detail: "Best place to review live code, public projects, and technical progress.",
    href: "https://github.com/BlackCat-Sec",
    icon: "github",
    active: true,
    stateLabel: "Live",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mokshith-hs",
    detail: "Best current channel for professional outreach, internships, and collaboration conversations.",
    href: "https://www.linkedin.com/in/mokshith-hs",
    icon: "linkedin",
    active: true,
    stateLabel: "Preferred",
  },
  {
    label: "Instagram",
    value: "Add when ready",
    detail: "Reserved for optional public updates or creator-facing content if you decide to share it later.",
    href: null,
    icon: "instagram",
    active: false,
    stateLabel: "Reserved",
  },
  {
    label: "X / Twitter",
    value: "Add when ready",
    detail: "Reserved for optional quick updates, public notes, or security-learning threads.",
    href: null,
    icon: "twitter",
    active: false,
    stateLabel: "Reserved",
  },
  {
    label: "Email",
    value: "Direct inbox can be added later",
    detail: "Kept private for now. LinkedIn remains the best current contact route for opportunities.",
    href: null,
    icon: "mail",
    active: false,
    stateLabel: "Private",
  },
  {
    label: "Resume",
    value: "Resume download slot ready",
    detail: "Replace the included file with your final PDF to activate a polished recruiter-ready download.",
    href: "resume",
    icon: "resume",
    active: true,
    stateLabel: "Ready",
  },
];

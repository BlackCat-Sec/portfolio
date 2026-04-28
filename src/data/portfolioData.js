// Edit this file to update portfolio copy, links, project placeholders, and resume paths.

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
    { label: "Featured Builds", value: "04" },
    { label: "Certifications", value: "05" },
    { label: "Core Domains", value: "06+" },
    { label: "Learning Mode", value: "24/7" },
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
    summary:
      "A cybersecurity scanner project built with HTML/CSS and FastAPI, focused on SSL/TLS checks and domain intelligence workflows for practical security analysis.",
    features: [
      "Combines frontend usability with backend security scanning workflows",
      "Built around domain intelligence and SSL/TLS inspection use cases",
      "Strong public showcase of security-focused web engineering",
    ],
    stack: ["FastAPI", "HTML", "CSS", "Cybersecurity"],
    footer:
      "Live public repository from your GitHub profile.",
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
    summary:
      "A smart agriculture project designed to help farmers move a step forward with practical support around modern agriculture and decision making.",
    features: [
      "Public GitHub build aligned with your AIML and real-world problem solving focus",
      "Shows interest in agriculture support and practical digital impact",
      "A strong example of AI/ML-inspired student project direction",
    ],
    stack: ["AI/ML", "Python", "Automation", "Agritech"],
    footer:
      "Live public repository from your GitHub profile.",
    actions: [
      { label: "Open Repo", href: "https://github.com/BlackCat-Sec/Agri-care" },
      { label: "Read README", href: "https://github.com/BlackCat-Sec/Agri-care#readme" },
    ],
  },
  {
    title: "Exploit Verifier",
    status: "Public",
    tone: "blue",
    summary:
      "A safe CVE exposure verification CLI that uses Docker-isolated benign probes to validate security exposure without turning the workflow into unsafe exploitation.",
    features: [
      "Security-oriented CLI built around controlled and safer verification",
      "Useful public project for showing defensive validation thinking",
      "Strong fit for cybersecurity portfolios and internship applications",
    ],
    stack: ["Python", "CLI", "Docker", "CVE Validation"],
    footer:
      "Live public repository from your GitHub profile.",
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
    summary:
      "A production-ready Python CLI for scanning repositories, PyPI packages, and SBOMs for security risk across supply-chain-aware workflows.",
    features: [
      "Focused on practical security risk review for code and package ecosystems",
      "Showcases Python tooling around software and supply-chain security",
      "Clear public example of useful security automation work",
    ],
    stack: ["Python", "CLI", "SBOM", "Supply Chain Security"],
    footer:
      "Live public repository from your GitHub profile.",
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
  },
  {
    title: "Google Play It Safe: Manage Security Risks",
    issuer: "Google",
    detail: "Risk management thinking and practical security awareness.",
  },
  {
    title: "Google Tools of the Trade: Linux and SQL",
    issuer: "Google",
    detail: "Linux and SQL fundamentals for technical security workflows.",
  },
  {
    title: "Google Connect and Protect: Networks and Network Security",
    issuer: "Google",
    detail: "Networking concepts and protection strategies for modern systems.",
  },
  {
    title: "Cisco Introduction to Cybersecurity",
    issuer: "Cisco",
    detail: "Foundational cybersecurity learning with industry-recognized framing.",
  },
];

export const achievements = [
  {
    title: "Hackathon Participation",
    detail: "Hands-on hackathon participation with project-building experience under real time constraints.",
    icon: "trophy",
  },
  {
    title: "Dyashin / DSEdify Opportunity",
    detail: "Selected for an employment opportunity through the Dyashin / DSEdify collaboration.",
    icon: "briefcase",
  },
  {
    title: "Continuous Security Learning",
    detail: "Active learner in cybersecurity, Linux, networking, and AI with a practical builder mindset.",
    icon: "spark",
  },
];

export const socialCards = [
  {
    label: "GitHub",
    value: "github.com/BlackCat-Sec",
    detail: "Code, experiments, and portfolio publishing",
    href: "https://github.com/BlackCat-Sec",
    icon: "github",
    active: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mokshith-hs",
    detail: "Professional profile, networking, and opportunities",
    href: "https://www.linkedin.com/in/mokshith-hs",
    icon: "linkedin",
    active: true,
  },
  {
    label: "Instagram",
    value: "@add-handle-later",
    detail: "Placeholder card for personal or creator updates",
    href: null,
    icon: "instagram",
    active: false,
  },
  {
    label: "X / Twitter",
    value: "@add-handle-later",
    detail: "Placeholder card for quick thoughts and public updates",
    href: null,
    icon: "twitter",
    active: false,
  },
  {
    label: "Email",
    value: "add-your-email@example.com",
    detail: "Placeholder contact point for direct inquiries",
    href: null,
    icon: "mail",
    active: false,
  },
  {
    label: "Resume",
    value: "Download placeholder file",
    detail: "Replace the included placeholder with your final resume PDF",
    href: "resume",
    icon: "resume",
    active: true,
  },
];

/*
 * This is the main content file for the portfolio.
 * Add future projects and skills here; the page layout updates automatically.
 */

export const siteContent = {
  roles: ["Software Developer", "Data Engineer", "AI Engineer"],
  contact: {
    email: "Pooyarezazadeh81@gmail.com",
    github: "https://github.com/pouyar81",
    linkedin: "https://linkedin.com/in/pouya-r",
    resume: "./resume.pdf",
  },
};

export const projects = [
  {
    id: "shopsync",
    title: "ShopSync E-Commerce System",
    organization: "Kennesaw State University",
    date: "Mar 2026 – Present",
    status: "Completed",
    summary:
      "A coordinated e-commerce application covering the customer journey from product discovery through checkout.",
    problem:
      "Translate shared project requirements into dependable commerce features while keeping a five-person team aligned.",
    contribution:
      "Developed three core workflows—product browsing, cart management, and checkout—and managed collaborative code changes through Git and GitHub.",
    outcome:
      "Built the project’s primary customer journey while contributing within the team’s shared Git/GitHub workflow.",
    technologies: ["Git/GitHub", "AWS S3", "Requirements Analysis", "Team Collaboration"],
    featured: true,
    visualType: "commerce",
    githubUrl: "",
    liveUrl: "",
    caseStudyUrl: "",
    image: "",
  },
  {
    id: "breaking-games",
    title: "SQL & Database Architecture",
    organization: "Breaking Games · Verified by Extern",
    date: "2026",
    status: "In progress",
    summary:
      "Transforming six disconnected CSV files into a structured analytics database and decision-ready Q4 dashboard.",
    problem:
      "Make fragmented sales data consistent, queryable, and useful for business analysis.",
    contribution:
      "Working through schema design, data cleaning, SQL analysis, and the translation of findings into clear data stories.",
    outcome:
      "Building a reliable data foundation intended to support Q4 analysis and clearer business decisions.",
    technologies: ["SQL", "Database Design", "Data Analysis", "Data Storytelling"],
    featured: true,
    visualType: "pipeline",
    githubUrl: "",
    liveUrl: "",
    caseStudyUrl: "",
    image: "",
  },
  {
    id: "sales-management",
    title: "Online Sales Management System",
    organization: "Kennesaw State University",
    date: "Feb – Apr 2024",
    status: "Completed",
    summary:
      "A database-driven sales management system delivered for a client within a two-month project timeline.",
    problem:
      "Give the client a more consistent way to store, organize, and retrieve sales information.",
    contribution:
      "Led a four-person team through requirements, implementation, and testing while applying relational modeling and normalization.",
    outcome:
      "Delivered a structured MySQL solution that improved the consistency of sales-data storage and retrieval.",
    technologies: ["SQL", "MySQL", "Relational Modeling", "Normalization"],
    featured: false,
    visualType: "schema",
    githubUrl: "",
    liveUrl: "",
    caseStudyUrl: "",
    image: "",
  },
];

export const skillCategories = [
  {
    id: "languages",
    label: "Languages",
    description: "Languages I use to express application logic, queries, and systems.",
    skills: [
      { name: "Java", mark: "JV" },
      { name: "Python", mark: "PY" },
      { name: "SQL", mark: "SQL" },
      { name: "C#", mark: "C#" },
    ],
  },
  {
    id: "software",
    label: "Software Development",
    description: "Core practices for building, testing, and improving applications.",
    skills: [
      { name: "Object-Oriented Programming", mark: "OO" },
      { name: "Software Testing & Debugging", mark: "QA" },
      { name: "Requirements Analysis", mark: "RA" },
      { name: "Unity", mark: "UN" },
    ],
  },
  {
    id: "data",
    label: "Data & Databases",
    description: "Tools and concepts for turning structured information into useful systems.",
    skills: [
      { name: "MySQL", mark: "MY" },
      { name: "Relational Databases", mark: "DB" },
      { name: "Data Modeling", mark: "DM" },
      { name: "Database Normalization", mark: "NF" },
      { name: "Data Analysis", mark: "DA" },
    ],
  },
  {
    id: "tools",
    label: "Cloud & Tools",
    description: "The development environment and delivery tools behind the work.",
    skills: [
      { name: "Git/GitHub", mark: "GT" },
      { name: "Linux", mark: "LX" },
      { name: "AWS S3", mark: "S3" },
    ],
  },
  {
    id: "practices",
    label: "Engineering Practices",
    description: "The habits that keep technical work clear and collaborative.",
    skills: [
      { name: "Agile/Scrum", mark: "AG" },
      { name: "Technical Documentation", mark: "TD" },
      { name: "Team Collaboration", mark: "TC" },
      { name: "Problem Solving", mark: "PS" },
    ],
  },
];

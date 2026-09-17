const siteContent = {
  roles: ["Software Developer", "Data Engineer", "AI Engineer"],
  contact: {email:"pooyarezazadeh81@gmail.com", github:"https://github.com/pouyar81", linkedin:"https://linkedin.com/in/pouya-r", resume:"./Pouya_Rezazadeh_Resume.pdf"}
};
const projects = [
  {
    id:"pfizer", title:"AI Document Intelligence", organization:"Extern · Pfizer Program", date:"Aug 2026 – Present", status:"In progress",
    summary:"Building a Python pipeline to turn scanned and digital pharmaceutical vendor documents into structured, searchable information.",
    problem:"Extract and classify information from varied enterprise PDFs, then make the relevant content easier to retrieve.",
    contribution:"Implementing and evaluating Tesseract and PaddleOCR workflows, and developing retrieval with LlamaIndex, vector search, text chunking, and large language models. Earlier research explains tokenization, training, and next-token prediction.",
    outcome:"Currently evaluating OCR accuracy, retrieval quality, and routing performance while documenting model trade-offs and deployment recommendations.",
    technologies:["Python","Tesseract / PaddleOCR","LlamaIndex","RAG","Vector Search"], featured:true, visualType:"documents", quadrant:"0% 100%", githubUrl:"",liveUrl:"",
    caseStudyUrl:"./case-study-pfizer.html",image:""
  },
  {
    id:"breaking-games",title:"E-Commerce Analytics & Database Architecture",organization:"Extern · Breaking Games",date:"Jul 2026 – Aug 2026",status:"Completed",
    summary:"Connected six e-commerce data sources into a SQLite database and an interactive dashboard for marketing and inventory decisions.",
    problem:"Unify fragmented sales, marketing, and checkout data so the business can assess product performance and prepare for Q4.",
    contribution:"Built an ETL workflow, standardized product identifiers with a dim_product table, and wrote INNER and LEFT JOIN queries. Analyzed marketing attribution across 400+ referral sources, cleaned channel categories, and filtered bots and invalid checkout records.",
    outcome:"Built and presented an HTML/Chart.js dashboard and Holiday Game Plan with inventory reorder and marketing-priority recommendations. Recalculated cart-abandonment metrics after filtering noise and aligning comparison periods.",
    technologies:["SQL / SQLite","ETL","Data Modeling","Chart.js","Marketing Attribution"],featured:true,visualType:"pipeline",quadrant:"100% 0%",githubUrl:"",liveUrl:"",
    caseStudyUrl:"./case-study-breaking-games.html",image:""
  },
  {
    id:"shopsync",title:"ShopSync E-Commerce System",organization:"Kennesaw State University",date:"Feb 2026 – May 2026",status:"Completed",
    summary:"Led a five-person team to deliver a database-driven e-commerce system in four months, from requirements through implementation and testing.",
    problem:"Turn shared requirements into a coordinated shopping experience with consistent relational data and a dependable cloud setup.",
    contribution:"Developed product browsing, cart, and checkout workflows. Deployed services on AWS EC2, managed data in RDS, automated tasks with Lambda, served assets from S3, and coordinated code changes through Git/GitHub.",
    outcome:"Delivered the core customer journey and designed normalized SQL models to improve data consistency and retrieval reliability.",
    technologies:["Java","JavaScript","MySQL","AWS EC2 / RDS","AWS Lambda / S3"],featured:false,visualType:"commerce",quadrant:"0% 0%",githubUrl:"",liveUrl:"",
    caseStudyUrl:"./case-study-shopsync.html",image:""
  },
  {
    id:"sales-management",title:"Online Sales Management System",organization:"Kennesaw State University",date:"Feb 2024 – May 2024",status:"Completed",
    summary:"Delivered a database-driven sales management system for one client within a two-month project timeline.",
    problem:"Give the client a consistent way to store, organize, and retrieve sales information.",
    contribution:"Led a four-person team through requirements, implementation, and testing, applying SQL/MySQL, relational modeling, and normalization.",
    outcome:"Delivered a structured MySQL solution that improved the consistency of sales-data storage and retrieval.",
    technologies:["SQL","MySQL","Relational Modeling","Normalization"],featured:false,visualType:"schema",quadrant:"100% 100%",githubUrl:"",liveUrl:"",
    caseStudyUrl:"./case-study-sales-management.html",image:""
  }
];
const skillCategories = [
  {id:"languages",label:"Languages",description:"Languages for application logic, web interfaces, and database queries.",skills:[{name:"Python",mark:"PY"},{name:"SQL",mark:"SQL"},{name:"Java",mark:"JV"},{name:"C#",mark:"C#"},{name:"JavaScript",mark:"JS"},{name:"HTML",mark:"HTML"},{name:"CSS",mark:"CSS"}]},
  {id:"ai",label:"AI & Documents",description:"Tools and concepts I’m applying in my ongoing document-intelligence externship.",skills:[{name:"Retrieval-Augmented Generation",mark:"RAG"},{name:"LlamaIndex",mark:"LI"},{name:"Vector Search",mark:"VS"},{name:"Tesseract",mark:"TS"},{name:"PaddleOCR",mark:"PO"},{name:"Optical Character Recognition",mark:"OCR"},{name:"Large Language Models",mark:"LLM"},{name:"Text Chunking",mark:"TC"},{name:"Data Extraction",mark:"DE"},{name:"Document Classification",mark:"DC"}]},
  {id:"data",label:"Data & Analytics",description:"Building reliable data foundations and explaining what the data shows.",skills:[{name:"MySQL",mark:"MY"},{name:"SQLite",mark:"SQ"},{name:"ETL Workflows",mark:"ETL"},{name:"Data Modeling",mark:"DM"},{name:"Relational Databases",mark:"DB"},{name:"Database Normalization",mark:"NF"},{name:"Pandas",mark:"PD"},{name:"NumPy",mark:"NP"},{name:"Matplotlib",mark:"MP"},{name:"scikit-learn",mark:"SK"},{name:"Chart.js",mark:"CH"},{name:"Data Analysis",mark:"DA"},{name:"Data Storytelling",mark:"DS"}]},
  {id:"tools",label:"Cloud & Tools",description:"The platforms behind application deployment, automation, and collaboration.",skills:[{name:"AWS S3",mark:"S3"},{name:"AWS EC2",mark:"EC2"},{name:"AWS RDS",mark:"RDS"},{name:"AWS Lambda",mark:"AWS"},{name:"Git / GitHub",mark:"GT"},{name:"GitHub Actions",mark:"GA"},{name:"Linux",mark:"LX"}]},
  {id:"practices",label:"Engineering Practices",description:"Methods for leading teams and delivering clear, maintainable systems.",skills:[{name:"Software Development Lifecycle",mark:"SDLC"},{name:"Object-Oriented Programming",mark:"OO"},{name:"Requirements Analysis",mark:"RA"},{name:"Automated Testing",mark:"QA"},{name:"Code Review",mark:"CR"},{name:"CI/CD",mark:"CI"},{name:"Debugging",mark:"DB"},{name:"Technical Documentation",mark:"TD"},{name:"Agile / Scrum",mark:"AG"},{name:"Team Collaboration",mark:"TC"},{name:"Unity",mark:"UN"}]}
];

export { projects, siteContent, skillCategories };

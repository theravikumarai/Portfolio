import AIML from "../assets/aiml.png";
import Programming from "../assets/programming.png";
import MLOps from "../assets/MLOps.png";
import Cloud from "../assets/cloud.png";
import Visualization from "../assets/front-end-web-development.png";
import SoftSkills from "../assets/softskills.png";
import Project1 from "../assets/tubenotes.png";
import Project2 from "../assets/faq.png";
import Project3 from "../assets/AiVIdeo.jpg";
import Project4 from "../assets/SocialMedia.jpg";
import Github from "../assets/github.jpg";
import Medium from "../assets/medium.png";
import LinkedIn from "../assets/linkedin.png";
import Youtube from "../assets/youtube.png";
import CourseraLogo from "../assets/certificates/Crash_Course_on_Python.png";
import DatabricksLogo from "../assets/certificates/Databricks_Fundamentsals.png";
import LeadersLogo from "../assets/certificates/Emerging_Leadership_Program.png";
import ComputerVisionLogo from "../assets/certificates/Introduction_to_Computer_Vision_with_TensorFlow.png";
import AwsAiPracticioner from "../assets/certificates/AWS AI Certified Practicioner.png";
import AwsSagemaker from "../assets/certificates/AWS Sagemaker.png";
import BigData from "../assets/certificates/Big Data.png";
import Matlab from "../assets/certificates/Matlab.png";
import PowerBI from "../assets/certificates/PowerBI.png";
import RAG from "../assets/certificates/RAG.png";

import Kaggle from "../assets/kaggle.png";

const ABOUT = [
    "Building scalable solutions with AI, Machine Learning, NLP, Generative AI, and Agentic AI to solve complex real-world business challenges, optimize decision-making, and drive meaningful impact at scale."
];

const PROFICIENCIES = {
  details: [
    {
      id: 1,
      level: "FOUNDATION",
      title: "AI & Machine Learning",
      image: <img src={AIML} alt="AI & Machine Learning" className="icon" />,
      badges: [
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Computer Vision",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
      ],
    },

    {
      id: 2,
      level: "GENAI",
      title: "Generative AI & LLMs",
      image: <img src={Programming} alt="Generative AI" className="icon" />,
      badges: [
        "LLMs",
        "Prompt Engineering",
        "RAG",
        "Embeddings",
        "Vector Databases",
        "MCP",
      ],
    },

    {
      id: 3,
      level: "AGENTIC",
      title: "Multi-Agent Systems",
      image: <img src={MLOps} alt="Multi-Agent Systems" className="icon" />,
      badges: [
        "Agentic AI",
        "AI Agents",
        "CrewAI",
        "LangChain",
        "LangGraph",
        "Agent Orchestration",
      ],
    },

    {
      id: 4,
      level: "APPLICATIONS",
      title: "AI Application Development",
      image: <img src={Cloud} alt="AI Application Development" className="icon" />,
      badges: [
        "FastAPI",
        "REST APIs",
        "Async Python",
        "Pydantic",
        "Docker",
        "Kubernetes",
        "Streamlit",
      ],
    },

    {
      id: 5,
      level: "DATA",
      title: "Data Engineering & Analytics",
      image: <img src={MLOps} alt="Data Engineering" className="icon" />,
      badges: [
        "Python",
        "SQL",
        "Pandas",
        "NumPy",
        "Feature Engineering",
        "Statistics",
        "Data Visualization",
      ],
    },

    {
      id: 6,
      level: "MLOPS",
      title: "MLOps & Cloud",
      image: <img src={Visualization} alt="MLOps & Cloud" className="icon" />,
      badges: [
        "AWS",
        "GCP",
        "Azure",
        "MLflow",
        "Lambda",
        "S3",
        "API Gateway",
        "GitHub Actions",
        "CI/CD",
      ],
    },

    {
      id: 7,
      level: "PRODUCTION",
      title: "Production AI Systems",
      image: <img src={SoftSkills} alt="Production AI Systems" className="icon" />,
      badges: [
        "Experiment Tracking",
        "Model Registry",
        "Model Versioning",
        "Model Evaluation",
        "Model Serving",
        "Deployment",
      ],
    },

    {
      id: 8,
      level: "FOUNDATION",
      title: "Software Engineering",
      image: <img src={SoftSkills} alt="Software Engineering" className="icon" />,
      badges: [
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Git",
        "GitHub",
        "Linux",
      ],
    },

    {
      id: 9,
      level: "ARCHITECTURE",
      title: "AI System Design",
      image: <img src={SoftSkills} alt="AI System Design" className="icon" />,
      badges: [
        "AI System Design",
        "LLM System Design",
        "Multi-Agent Architectures",
        "Scalable AI Systems",
        "Design Patterns",
      ],
    },
  ],
};

const PROJECTS = [
    {
        id: 1,
        title: "TubeNotes AI",
        summary: "An AI-powered assistant that turns long-form YouTube videos into concise, structured notes for faster learning and review.",
        problem: "YouTube videos are rich in information but hard to scan quickly, especially for students and professionals who need actionable takeaways.",
        features: ["AI Summarization", "Multi-language output", "Export-ready notes", "Cloud-ready deployment"],
        techStack: ["Python", "FastAPI", "Gemini", "Streamlit", "AWS"],
        metrics: ["LLM Assistant", "FastAPI Backend", "Cloud Ready"],
        architecture: ["YouTube URL", "FastAPI", "Gemini AI", "Structured notes"],
        outcome: "Transforms long-form video into scannable, export-ready learning notes in minutes.",
        image: <img src={Project1} alt="TubeNotes AI" className="project_img" />,
        link: "https://github.com/RaviikrDS/TubeNotes-AI.git",
        demoLink: "https://tubenotes-ai.streamlit.app/"
    },
    {
        id: 2,
        title: "Smart FaQ Chatbot",
        summary: "A lightweight document-grounded chatbot that answers domain questions using embeddings and a simple local-first architecture.",
        problem: "Teams often need a fast, low-friction way to answer recurring questions without depending on a large support team.",
        features: ["Context-aware responses", "Local deployment", "Document retrieval", "FastAPI backend"],
        techStack: ["Python", "FastAPI", "FAISS", "HuggingFace", "Streamlit"],
        metrics: ["RAG Workflow", "Vector Search", "FastAPI API"],
        architecture: ["Documents", "Embeddings", "FAISS retrieval", "Answer generation"],
        outcome: "Gives teams a focused, low-friction way to surface answers from their internal documents.",
        image: <img src={Project2} alt="Smart FaQ Chatbot" className="project_img" />,
        link: "https://github.com/theravikumarai/smart_faq_chatbot.git/"
    },
    {
        id: 3,
        title: "Cloud-Native Portfolio Platform",
        summary: "A portfolio platform with a React experience and a serverless FastAPI contact backend on AWS.",
        problem: "Provides a reliable way for recruiters and collaborators to contact me while demonstrating production cloud architecture.",
        features: ["Serverless contact API", "Notification workflow", "Cloud-ready deployment", "Responsive portfolio UI"],
        techStack: ["React", "FastAPI", "AWS Lambda", "API Gateway", "DynamoDB", "S3", "SNS"],
        metrics: ["Serverless Backend", "AWS Lambda", "Event Notifications"],
        architecture: ["React UI", "API Gateway", "Lambda", "DynamoDB & SNS"],
        outcome: "Combines a recruiter-friendly portfolio with a scalable cloud-native contact workflow.",
        image: (
          <div className="portfolio-project-visual" aria-label="Cloud-native portfolio architecture">
            <span>Cloud-Native Portfolio</span>
            <div><b>React</b><i>→</i><b>FastAPI</b><i>→</i><b>AWS</b></div>
          </div>
        ),
        link: "https://github.com/theravikumarai"
    },
    // {
    //     id: 3,
    //     title: "Nina - IT Assistant",
    //     description: "This project leverages Generative AI and Deep Learning to create videos from text-based inputs. It integrates Natural Language Processing (NLP) and Computer Vision to generate relevant visuals, animations, and voiceovers. Using LLMs, AI-powered video synthesis, and AWS cloud services, the system converts scripts into engaging video content. This solution is ideal for content creators, businesses, and automated storytelling, enabling scalable and high-quality video production with minimal manual effort.",
    //     image: <img src={Project3} alt="AI Video Creator" className="project_img" />,
    //     link: "https://ai-video-creator.streamlit.app/"
   // },
];

const CERTIFICATIONS = [
  {
    id: 1,
    title: "Crash Course on Python | Google",
    platform: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/LMLTQFFQPMP3",
    image: CourseraLogo,
    description: "Earned a Google-endorsed certification that validates my ability to write, debug, and apply Python code effectively.",
  },
  {
    id: 2,
    title: "Databricks Fundamentals | Databricks Academy",
    platform: "Databricks",
    // link: "https://coursera.org/verify/your-cert-id-2",
    image: DatabricksLogo,
    description: "Completed core training in Databricks fundamentals, covering unified analytics, collaborative data engineering workflows, and essential machine learning concepts",
  },
  {
    id: 3,
    title: "Emerging Leaders Program | Havard Business",
    platform: "Havard Learnings",
    // link: "https://coursera.org/verify/your-cert-id-3",
    image: LeadersLogo,
    description: "Developed a strong foundation in leadership principles, behavior frameworks, and strategic leadership skills through a Harvard Business program.",
  },
  {
    id: 4,
    title: "Introduction to Computer Vision with TensorFlow | Google Cloud",
    platform: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/6EC5TGTLWN2Z",
    image: ComputerVisionLogo,
    description: "A certification demonstrating foundational knowledge of computer vision concepts using TensorFlow.",
  },
  {
    id: 5,
    title: "AWS AI Certified Practicioner | AWS",
    platform: "AWS",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/08ca0cbcd2384a4c9dd56319abb585ff",
    image: AwsAiPracticioner,
    description: "Validates foundational knowledge of AI, machine learning, and generative AI concepts on AWS.",
  },
  {
    id: 6,
    title: "AWS Sagemaker | Capgemini University",
    platform: "My Learning",
    // link: "",
    image: AwsSagemaker,
    description: "Demonstrates practical skills in building, training, and deploying machine learning models using Amazon SageMaker.",
  },
  {
    id: 7,
    title: "Big Data | Capgemini University",
    platform: "My Learning",
    // link: "",
    image: BigData,
    description: "Covers core Big Data concepts, distributed computing, and modern data processing technologies.",
  },
  {
    id: 8,
    title: "Matlab Onramp | MathWorks Training Services",
    platform: "MathWorks",
    link: "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=fa17ab94-4b83-4fbc-adef-7917927c2903&fbclid=IwY2xjawE2StpleHRuA2FlbQIxMQABHQZppCYYgezWYMSVYj9_pYboxRoYndE2N7K228mxJCyp8fphFFnzePldWg_aem_FD_xKi7VtWAaf6lZRVpf3A",
    image: Matlab,
    description: "Demonstrates proficiency in MATLAB fundamentals for numerical computing, programming, and data analysis.",
  },
  {
    id: 9,
    title: "Microsoft Power BI | Skill Nation",
    platform: "Skill Nation",
    link: "https://excel.jatanshah.in/your-certificate/2D0AF91F5F95-2D0AF9112B49-839B702BFE/",
    image: PowerBI,
    description: "Validates skills in creating interactive dashboards, reports, and business intelligence visualizations with Power BI.",
  },
  {
    id: 10,
    title: "Retrieval Augmented Generation (RAG) | DeepLearning.AI",
    platform: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/MN7IWQACE9BY",
    image: RAG,
    description: "Demonstrates expertise in building AI applications using Retrieval-Augmented Generation (RAG) techniques.",
  },
];


const OTHER_PLATFORMS = [
    {
        id: 1,
        title: "GitHub",
        // description: "Explore my projects, Learning Path, open-source contributions and technical experiments.",
        // highlights: ["AI Projects", "Open Source", "Learning Journey"],
        cta: "Explore",
        link: "https://github.com/theravikumarai",
        image: Github
    },
    {
        id: 2,
        title: "Medium",
        // description: "Read my in-depth articles on Data Science, AI, Machine Learning and emerging technologies.",
        // highlights: ["AI Articles", "LLM Tutorials", "Learning Notes"],
        cta: "Explore",
        link: "https://theravikumarai.medium.com/",
        image: Medium

    },
    {
        id: 3,
        title: "LinkedIn",
        // highlights: ["AI Engineering", "Professional Journey", "Collaboration"],
        cta: "Explore",
        // description: "Let’s connect professionally - follow my latest updates, posts and collaborations.",
        link: "https://www.linkedin.com/in/theravikumarai/",
        image: LinkedIn
    },
    {
        id: 4,
        title: "Kaggle",
        // description: "Explore my notebooks, competitions, and data science experiments in the Kaggle community.",
        // highlights: ["ML Notebooks", "Data Science", "Competitions"],
        cta: "Explore",
        link: "https://www.kaggle.com/theravikumarai",
        image: Kaggle
    },
    {
        id: 5,
        title: "Youtube",
        // description: "Learn Machine Learning, Deep Learning, NLP, LLMs, and Generative AI through hands-on tutorials and real-world projects.",
        // highlights: ["Hands-on AI", "End to End Projects", "Learning"],
        cta: "Explore",
        link: "https://www.youtube.com/@theravikumarai",
        image: Youtube
    }
];

const CONTACTINFO=[
"Rajiv Gandhi Infotech Park, Hinjewadi Phase 3, Pune",
        "Maharashtra, India",
        "411057",
        "theravikumarai@gmail.com",
];


export {
    ABOUT,
    PROFICIENCIES,
    PROJECTS,
    CERTIFICATIONS,
    OTHER_PLATFORMS,
    CONTACTINFO
}

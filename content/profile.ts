// Everything about Hriday except projects lives here.
// Projects live in content/projects.json so they can be updated on their own.

export type Kind = "industry" | "research";

export type Role = {
  org: string;
  title: string;
  kind: Kind;
  start: string; // "YYYY-MM"
  end?: string; // "YYYY-MM"; leave out for a role that hasn't ended
  upcoming?: boolean;
  themes?: string[]; // "agents", "evals", or "robots"
  bullets: string[];
};

export type Paper = {
  title?: string; // exact paper title, when known
  description: string;
  venue: string;
  url?: string;
};

export const profile = {
  name: "Hriday Sainathuni",
  tagline: "I build AI agents and the evals that tell you whether they actually work.",
  intro: [
    "I study computer science at the University of Virginia. I finish my B.S. in May 2027, then keep going for a master's in computer science, graduating in 2028.",
    "Most of my recent work is about agent memory, retrieval, and evaluation. What should an agent remember? Did a change make it better, or did it just look better? Those are the questions I like working on.",
  ],
  links: {
    email: "sainathunih@gmail.com",
    github: "https://github.com/HridaySainathuni",
    linkedin: "https://www.linkedin.com/in/hriday-sainathuni-61774b233/",
  },
  outside:
    "Outside of work, I enjoy playing pickleball, playing poker, and hiking.",
};

export const roles: Role[] = [
  {
    org: "Workday",
    title: "Machine Learning Engineering Intern",
    kind: "industry",
    start: "2026-05",
    end: "2026-08",
    themes: ["agents", "evals"],
    bullets: [
      "Built cross-session memory for Workday's LangGraph planning agent, so users can pick up earlier work instead of rebuilding context.",
      "Wrote a Postgres retriever that ranks past conversations by relevance and recency, with 3 ms writes and 1.5 s recall.",
      "Added a summarization layer that compresses long histories to stay inside the model's context window.",
      "Built an LLM-as-judge evaluation harness over LangSmith traces, scoring 963 sampled responses with Wilson confidence intervals.",
      "Built a fault-tolerant Kubernetes pipeline over 189K trace spans from 6,392 live agent turns, using cursor-based extraction and atomic checkpointing to survive pod evictions. It localized 71% of failures to a single hotspot.",
      "Fixed 5 production bugs, from session-memory pollution to hallucinated suggestions, and added regression tests for each.",
    ],
  },
  {
    org: "NuAxis",
    title: "Software Engineering Intern",
    kind: "industry",
    start: "2025-08",
    end: "2025-12",
    themes: ["agents"],
    bullets: [
      "Built an LLM chatbot on Azure for people applying for federal permits. It answers requirement questions, walks them through the process, and fills in form fields from the chat. Demoed to the U.S. Fish and Wildlife Service.",
      "Built full-stack prototypes with React, MongoDB, and PostgreSQL, and audited federal websites for accessibility.",
    ],
  },
  {
    org: "Verizon",
    title: "AI/ML Intern, Cyber AI Services",
    kind: "industry",
    start: "2025-05",
    end: "2025-08",
    themes: ["evals"],
    bullets: [
      "Built a Dockerized FastAPI platform that runs adversarial tests against speech-to-speech AI systems using Twilio and agentic LLMs.",
      "Added automated prompt-injection and robustness testing to CI/CD with Vertex AI.",
      "Deployed a deepfake synthesis service on GCP and presented threat demonstrations to security and executive teams.",
    ],
  },
  {
    org: "CRAL Lab, University of Virginia",
    title: "Undergraduate Research Assistant",
    kind: "research",
    start: "2024-08",
    end: "2025-08",
    themes: ["robots"],
    bullets: [
      "Built SMGLib, an open-source library in Python, Gym, and PyTorch for benchmarking multi-robot path planners.",
      "Co-authored an ICRA 2025 paper on decentralized multi-agent coordination for robot navigation.",
    ],
  },
  {
    org: "RobotiXX Lab, George Mason University",
    title: "Multimodal Data Platform Development",
    kind: "research",
    start: "2023-06",
    end: "2023-08",
    themes: ["robots"],
    bullets: [
      "Engineered a ROS-based mobile device to collect multimodal sensor data (LiDAR, audio, video, odometry) for SLAM research.",
      "Automated sensor calibration and deployment via ROS launch configs. The dataset was used in an IROS 2023 publication.",
    ],
  },
  {
    org: "George Mason University",
    title: "Aspiring Scientists Summer Internship Program",
    kind: "research",
    start: "2023-05",
    end: "2024-06",
    themes: ["robots"],
    bullets: [
      "Simulated collaborative robot behavior using NetworkX and interactive visualization tools (Dash, Plotly).",
      "Implemented and tested RL algorithms (Q-Learning, PPO, hierarchical decomposition) in dynamic multi-agent environments.",
      "Created evaluation figures and experimental results for an IEEE ICRA submission analyzing learned policy generalization.",
    ],
  },
  {
    org: "Virginia Tech Sanghani Center",
    title: "Research Intern",
    kind: "research",
    start: "2022-11",
    end: "2024-05",
    themes: ["evals"],
    bullets: [
      "I joined in high school. Built an image classification pipeline over COCO and Conceptual Captions to study vision-language model representations.",
      "Contributed to a CVPR 2024 paper on black-box analysis and cross-modal reasoning in vision-language models.",
    ],
  },
];

export const papers: Paper[] = [
  {
    title: "Multi-Robot Navigation in Social Mini-Games: Definitions, Taxonomy, and Algorithms",
    description: "A survey and taxonomy of multi-robot navigation in tight shared spaces like doorways and intersections, with SMGLib for benchmarking planners.",
    venue: "Autonomous Robots, 2026",
    url: "https://arxiv.org/abs/2508.13459",
  },
  {
    title: "Semantic Shield: Defending Vision-Language Models Against Backdooring and Poisoning via Fine-grained Knowledge Alignment",
    description: "A defense that protects vision-language models from poisoned training data by aligning image regions with external knowledge.",
    venue: "CVPR 2024",
    url: "https://openaccess.thecvf.com/content/CVPR2024/html/Ishmam_Semantic_Shield_Defending_Vision-Language_Models_Against_Backdooring_and_Poisoning_via_CVPR_2024_paper.html",
  },
];

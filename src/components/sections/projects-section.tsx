import { ProjectCard } from "./project-card";

const projects = [
  {
    name: "Crowdfunding DApp",
    description:
      "A decentralized crowdfunding platform where anyone can launch or support Web3 projects. Features secure wallet integration and transparency using smart contracts.",
    technologies: "React.js, Thirdweb.js, Sepolia Testnet, MetaMask",
    liveDemoUrl: "#",
    githubUrl: "#",
    image: "https://picsum.photos/600/400?random=1",
    aiHint: "blockchain crypto"
  },
  {
    name: "Lazii.ai",
    description:
      "An AI-driven no-code environment, based on open-source bolt.diy, that enables users to create applications instantly and democratizes app building with AI-assisted automation.",
    technologies: "bolt.diy, AI, No-code",
    liveDemoUrl: "#",
    githubUrl: "#",
    image: "https://picsum.photos/600/400?random=2",
    aiHint: "ai robot"
  },
  {
    name: "Incorrupta",
    description:
      "A decentralized document storage solution for police departments, ensuring tamper-proof case files using Web3 and IPFS to promote transparency and prevent corruption.",
    technologies: "Web3, IPFS, Decentralized Storage",
    liveDemoUrl: "#",
    githubUrl: "#",
    image: "https://picsum.photos/600/400?random=3",
    aiHint: "secure documents"
  },
  {
    name: "Talkzii",
    description:
      "An AI companion app for emotional support, offering conversations, journaling, and recommendations. It blends empathy with technology for a human-first AI experience.",
    technologies: "React, Gemini API, Supabase, RAG",
    liveDemoUrl: "#",
    githubUrl: "#",
    image: "https://picsum.photos/600/400?random=4",
    aiHint: "conversation bubbles"
  },
  {
    name: "BYL (Behind Your Label)",
    description:
      "Scan ingredient lists on product packaging to learn about each ingredient’s effects and find safer alternatives, with a focus on Indian products.",
    technologies: "Mobile App, OCR, Data Scraping",
    liveDemoUrl: "#",
    githubUrl: "#",
    image: "https://picsum.photos/600/400?random=5",
    aiHint: "ingredients scan"
  },
  {
    name: "KunalAI Portfolio",
    description:
      "This very portfolio, an AI-powered personal website featuring a RAG-based chatbot, AI-generated project summaries, and a futuristic design.",
    technologies: "Next.js, Genkit, Gemini, Tailwind CSS, Framer Motion",
    liveDemoUrl: "#",
    githubUrl: "#",
    image: "https://picsum.photos/600/400?random=6",
    aiHint: "abstract code"
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Projects Showcase
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          Here are some of the projects I'm proud of.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

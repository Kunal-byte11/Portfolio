import { ProjectCard } from "./project-card";

const projects = [
  {
    name: "Crowdfunding DApp",
    description:
      "A decentralized crowdfunding platform where anyone can launch or support Web3 projects. Features secure wallet integration and transparency using smart contracts.",
    technologies: "React.js, Thirdweb.js, Sepolia Testnet, MetaMask",
    liveDemoUrl: "#",
    githubUrl: "#",
    image: "/assets/crowdfunding-dapp.png",
    aiHint: "blockchain crypto"
  },
  {
    name: "Lazii.ai",
    description:
      "An AI-driven no-code environment, based on open-source bolt.diy, that enables users to create applications instantly and democratizes app building with AI-assisted automation.",
    technologies: "bolt.diy, AI, No-code",
    liveDemoUrl: null,
    githubUrl: "#",
    image: "/assets/lazii-ai.png",
    aiHint: "ai robot"
  },
  {
    name: "KunalAI Portfolio",
    description:
      "This very portfolio, an AI-powered personal website featuring a RAG-based chatbot, AI-generated project summaries, and a futuristic design.",
    technologies: "Next.js, Genkit, Gemini, Tailwind CSS, Framer Motion",
    liveDemoUrl: "#",
    githubUrl: "#",
    image: "/assets/kunal-ai-portfolio.png",
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

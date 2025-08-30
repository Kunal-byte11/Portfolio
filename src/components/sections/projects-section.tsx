import { ProjectCard } from "./project-card";

const projects = [
  {
    name: "Crowdfunding DApp",
    description:
      "A decentralized crowdfunding platform where anyone can launch or support Web3 projects. Features secure wallet integration and transparency using smart contracts.",
    technologies: "React.js, Thirdweb.js, Sepolia Testnet, MetaMask",
    liveDemoUrl: "https://youtu.be/itWnGO9vWdM?si=SQlWwxNmALZ5M307",
    githubUrl: "https://github.com/Kunal-byte11",
    image: "/assests/Crowdfunding.png",
    aiHint: "blockchain crypto"
  },
  {
    name: "Lazii.ai",
    description:
      "An AI-driven no-code environment, based on open-source bolt.diy, that enables users to create applications instantly and democratizes app building with AI-assisted automation.",
    technologies: "bolt.diy, AI, No-code",
    liveDemoUrl: null,
    githubUrl: "https://github.com/Kunal-byte11",
    image: "/assests/LaziiAi.png",
    aiHint: "ai robot"
  },

  {
    name: "Talkzii",
    description:
      "An AI companion app for emotional support, offering conversations, journaling, and recommendations. Blends empathy with technology for a human-first AI experience.",
    technologies: "React, Gemini API, Supabase, RAG",
    liveDemoUrl: "https://talkzii.vercel.app",
    githubUrl: "https://github.com/Kunal-byte11",
    image: "/assests/talkzii.png",
    aiHint: "chat conversation"
  },
  {
    name: "BYL (Behind Your Label)",
    description:
      "An app where users scan ingredient lists on product packaging to learn about each ingredient’s effects and find safer alternatives, especially for Indian products.",
    technologies: "React Native, Firebase, OCR",
    liveDemoUrl: "https://byl.vercel.app",
    githubUrl: "https://github.com/Kunal-byte11",
    image: "/assests/byl.png",
    aiHint: "ingredients scan"
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

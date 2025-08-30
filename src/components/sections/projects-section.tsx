import { ProjectCard } from "./project-card";

const projects = [
  {
    name: "AI Plant Diagnosis",
    description:
      "A web app that uses a machine learning model to diagnose plant diseases from images. Built with Next.js and TensorFlow.js.",
    technologies: "Next.js, TensorFlow.js, Tailwind CSS, Firebase",
    liveDemoUrl: "#",
    githubUrl: "#",
    image: "https://picsum.photos/600/400?random=1",
    aiHint: "plant technology"
  },
  {
    name: "KunalAI Portfolio",
    description:
      "This very portfolio, an AI-powered personal website featuring a RAG-based chatbot, AI-generated project summaries, and a futuristic design.",
    technologies: "Next.js, Genkit, Gemini, Tailwind CSS, Framer Motion",
    liveDemoUrl: "#",
    githubUrl: "#",
    image: "https://picsum.photos/600/400?random=2",
    aiHint: "abstract code"
  },
  {
    name: "Interactive Data Visualization",
    description:
      "A platform for creating and sharing interactive charts and graphs. Uses D3.js for rendering and provides a user-friendly interface for data input.",
    technologies: "React, D3.js, Node.js, Express",
    liveDemoUrl: "#",
    githubUrl: "#",
    image: "https://picsum.photos/600/400?random=3",
    aiHint: "data visualization"
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

const experiences = [
  {
    role: "AI Developer",
    company: "FutureTech Inc.",
    period: "2022 - Present",
    description:
      "Developing and deploying AI-powered web applications using Next.js and Genkit. Led the development of a RAG-based customer support chatbot, improving response times by 40%.",
  },
  {
    role: "Full-Stack Developer",
    company: "Innovate Solutions",
    period: "2020 - 2022",
    description:
      "Built and maintained scalable web applications for various clients. Specialized in React and Node.js, delivering high-quality, responsive user interfaces.",
  },
  {
    role: "Hackathon Winner",
    company: "AI for Good Hackathon",
    period: "2021",
    description:
      "Won first place for creating an application that helps identify misinformation using natural language processing. Presented the project to a panel of industry experts.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Career Journey
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          My professional experience and milestones.
        </p>
        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative mb-8 flex w-full items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <div className="rounded-lg border border-border/50 bg-card p-6 shadow-md transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-primary/20">
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <h3 className="font-headline text-xl font-bold text-primary">
                    {exp.role}
                  </h3>
                  <p className="text-md font-semibold text-accent">
                    {exp.company}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-border transition-colors group-hover:bg-primary"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

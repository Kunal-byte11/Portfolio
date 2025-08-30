import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Database, Brain, Wand2, Server, Globe } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: <Code className="h-6 w-6 text-accent" />,
    items: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  },
  {
    category: "Backend & Databases",
    icon: <Server className="h-6 w-6 text-accent" />,
    items: ["Firebase", "Supabase", "Node.js (basics)"],
  },
  {
    category: "Web3",
    icon: <Globe className="h-6 w-6 text-accent" />,
    items: ["Thirdweb.js", "MetaMask", "Sepolia Testnet", "IPFS"],
  },
  {
    category: "AI / GenAI",
    icon: <Brain className="h-6 w-6 text-accent" />,
    items: ["Prompt Engineering", "RAG Applications", "LLM Integration (OpenAI, Gemini, Dolphin AI)", "Hugging Face (basics)"],
  },
  {
    category: "Data & ML",
    icon: <Database className="h-6 w-6 text-accent" />,
    items: ["Python (NumPy, Pandas, Scikit-learn basics)", "Vector Databases (Pinecone, FAISS basics)"],
  },
  {
    category: "Tools & Workflow",
    icon: <Wand2 className="h-6 w-6 text-accent" />,
    items: ["Git & GitHub", "Vercel", "Netlify", "Streamlit", "Web Scraping & APIs"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/30 py-24 sm:py-32">
      <div className="container">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Skills & Expertise
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          The technologies I work with to bring ideas to life.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillCategory) => (
            <Card key={skillCategory.category} className="border-border/50 bg-card">
              <CardHeader className="flex flex-row items-center gap-4">
                {skillCategory.icon}
                <CardTitle className="font-headline text-xl">
                  {skillCategory.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((item) => (
                    <Badge key={item} variant="secondary" className="text-sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

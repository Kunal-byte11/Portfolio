"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Play, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { getAiProjectSummary } from "@/lib/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Project = {
  name: string;
  description: string;
  technologies: string;
  liveDemoUrl: string | null;
  githubUrl: string;
  image: string;
  aiHint: string;
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      const summary = await getAiProjectSummary({
        projectName: project.name,
        projectDescription: project.description,
        technologiesUsed: project.technologies,
      });
      setAiSummary(summary);
      setIsLoading(false);
    };
    fetchSummary();
  }, [project]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-accent/20 bg-card/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-accent/20"
    >
      <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={project.aiHint}
        />
      </div>
      <h3 className="font-headline text-xl font-bold text-primary">{project.name}</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {project.technologies.split(", ").map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="mt-4 h-24">
        <h4 className="text-sm font-semibold text-accent">AI Summary</h4>
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-accent" />
          </div>
        ) : (
          <p className="mt-1 text-sm text-muted-foreground">{aiSummary}</p>
        )}
      </div>
      <div className="mt-6 flex items-center gap-4">
        <Button asChild variant="outline">
          <Link href={project.githubUrl} target="_blank">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Link>
        </Button>
        {project.liveDemoUrl && (
          <Button asChild variant="default">
            <Link href={project.liveDemoUrl} target="_blank">
              <Play className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
      </div>
    </motion.div>
  );
}

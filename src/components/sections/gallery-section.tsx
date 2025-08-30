"use client";

import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const galleryImages = [
  {
    src: "/assests/Crowdfunding.png",
    alt: "Crowdfunding DApp",
    title: "Crowdfunding DApp",
    description: "A decentralized crowdfunding platform where anyone can launch or support Web3 projects. Features secure wallet integration and transparency using smart contracts.",
    technologies: ["React.js", "Thirdweb.js", "Sepolia Testnet", "MetaMask"],
    category: "Blockchain"
  },
  {
    src: "/assests/LaziiAi.png",
    alt: "Lazii AI Platform",
    title: "Lazii.ai",
    description: "An AI-driven no-code environment, based on open-source bolt.diy, that enables users to create applications instantly and democratizes app building with AI-assisted automation.",
    technologies: ["bolt.diy", "AI", "No-code"],
    category: "AI/ML"
  },
  {
    src: "/assests/talkzii.png",
    alt: "Talkzii App",
    title: "Talkzii",
    description: "An AI companion app for emotional support, offering conversations, journaling, and recommendations. Blends empathy with technology for a human-first AI experience.",
    technologies: ["React", "Gemini API", "Supabase", "RAG"],
    category: "AI/ML"
  },
  {
    src: "/assests/byl.png",
    alt: "BYL App",
    title: "BYL (Behind Your Label)",
    description: "An app where users scan ingredient lists on product packaging to learn about each ingredient's effects and find safer alternatives, especially for Indian products.",
    technologies: ["React Native", "Firebase", "OCR"],
    category: "Mobile App"
  },
  {
    src: "/assests/talkzii copy.png",
    alt: "Talkzii Alternative Design",
    title: "Talkzii - Alternative UI",
    description: "Alternative design concept for the Talkzii AI companion app with enhanced user interface and improved user experience.",
    technologies: ["React", "UI/UX Design", "Figma"],
    category: "Design"
  }
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Project Gallery
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Visual showcase of my work and projects
          </p>
        </motion.div>
        
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border border-accent/20 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20">
                <CardContent className="p-0">
                  <div className="relative aspect-video min-h-[200px] overflow-hidden bg-muted">
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-primary">{image.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {image.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                      {image.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {image.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {image.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{image.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
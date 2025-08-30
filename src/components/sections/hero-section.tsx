import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/typing-animation";
import { ArrowDown, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="hero" className="relative flex h-screen w-full items-center justify-center">
      <div className="container z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-headline text-5xl font-bold tracking-tight text-transparent md:text-7xl bg-clip-text bg-gradient-to-br from-primary via-accent to-primary">
            Kunal Dubey
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TypingAnimation
            text="AI Developer & Web Innovator"
            className="mt-4 font-headline text-lg text-muted-foreground md:text-2xl"
          />
        </motion.div>
        <motion.div
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="#projects">
              Explore Projects
              <BrainCircuit className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">
              Get In Touch
            </Link>
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}

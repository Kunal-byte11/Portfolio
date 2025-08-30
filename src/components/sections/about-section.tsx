import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Hello! I'm Kunal, a passionate full-stack developer building the future of the web, one line of code at a time. My journey into technology started with a simple curiosity about how things work, and it has evolved into a career where I get to build intelligent and engaging digital experiences.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              I specialize in combining the power of modern web frameworks like React and Next.js with the intelligence of AI technologies like Google's Gemini and Genkit. I thrive on solving complex problems and turning innovative ideas into reality, from creating smart applications that learn and adapt to designing beautiful, user-friendly interfaces.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <Card className="overflow-hidden border-2 border-primary/50 bg-transparent shadow-lg shadow-primary/20">
              <CardContent className="p-0">
                <OptimizedImage
                  src="/assests/portrait.png"
                  alt="Kunal Dubey"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                  data-ai-hint="man portrait"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Send, Phone, Mail, Github, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="bg-muted/30 py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have a project in mind, want to collaborate, or just want to say hi?
              Feel free to reach out. I'm always open to discussing new ideas.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <Link href="tel:+917058514256" className="hover:text-primary transition-colors">
                  +91 7058514256
                </Link>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <Link href="mailto:kunaldubey975@gmail.com" className="hover:text-primary transition-colors">
                  kunaldubey975@gmail.com
                </Link>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <Button asChild variant="outline" size="sm">
                <Link href="https://github.com/Kunal-byte11" target="_blank">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="https://www.linkedin.com/in/kunaldubey26" target="_blank">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Link>
              </Button>
            </div>

            <div className="mt-8 rounded-lg border border-accent/20 bg-card/50 p-6 shadow-lg backdrop-blur-sm">
                <p className="text-center text-muted-foreground">
                    Or, why not talk to my AI assistant?
                </p>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                    Click the <Bot className="inline h-4 w-4"/> icon at the bottom-right to ask about my projects, skills, and experience!
                </p>
            </div>
          </div>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" required rows={5} />
            <Button type="submit" size="lg" className="w-full">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

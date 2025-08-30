import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const socialLinks = [
  {
    href: "https://github.com",
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com",
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com",
    icon: <Twitter className="h-5 w-5" />,
    label: "Twitter",
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Kunal Dubey. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              size="icon"
              asChild
              aria-label={link.label}
            >
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}

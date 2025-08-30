"use client";

import { useScrollSpy } from "@/hooks/use-scroll-spy";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const activeId = useScrollSpy(
    navItems.map((item) => item.href.substring(1)),
    { rootMargin: "-50% 0px -50% 0px" }
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-headline text-lg font-bold">
          <Code2 className="h-6 w-6 text-primary" />
          <span>KunalAI</span>
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-muted-foreground transition-colors hover:text-primary",
                    activeId === item.href.substring(1) && "text-primary"
                  )}
                >
                  {item.label}
                  {activeId === item.href.substring(1) && (
                    <motion.div
                      layoutId="active-nav-link"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

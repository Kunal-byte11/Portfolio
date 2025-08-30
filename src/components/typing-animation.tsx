"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TypingAnimation({
  text,
  className,
  delay = 0,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <p className={className}>
      {displayText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="inline-block h-full w-1 translate-y-1 bg-accent"
      >
        &nbsp;
      </motion.span>
    </p>
  );
}

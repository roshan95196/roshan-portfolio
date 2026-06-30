"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const GREETING = "Hi, I'm ";
const TYPING_SPEED_MS = 55;

interface HeroGreetingProps {
  onComplete?: () => void;
}

function TypingCursor({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <motion.span
      aria-hidden="true"
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.5, repeat: Infinity }}
      className="ml-0.5 inline-block h-[0.85em] w-[3px] translate-y-[0.05em] bg-primary align-middle"
    />
  );
}

export function HeroGreeting({ onComplete }: HeroGreetingProps) {
  const fullText = `${GREETING}${profile.name}`;
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const hasCalledComplete = useRef(false);

  useEffect(() => {
    const markComplete = () => {
      if (hasCalledComplete.current) return;
      hasCalledComplete.current = true;
      setIsComplete(true);
      onComplete?.();
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCharIndex(fullText.length);
      markComplete();
      return;
    }

    if (charIndex >= fullText.length) {
      markComplete();
      return;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + 1);
    }, TYPING_SPEED_MS);

    return () => clearTimeout(timeout);
  }, [charIndex, fullText.length, onComplete]);

  const displayedGreeting = fullText.slice(
    0,
    Math.min(charIndex, GREETING.length)
  );
  const displayedName = fullText.slice(GREETING.length, charIndex);
  const isTypingGreeting = charIndex < GREETING.length;

  return (
    <div className="space-y-1">
      <p className="min-h-[1.25em] text-lg font-medium text-muted-foreground sm:text-xl">
        {displayedGreeting}
        <TypingCursor visible={!isComplete && isTypingGreeting} />
      </p>

      <h1 className="min-h-[1.15em] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {displayedName && (
          <span className="gradient-text">{displayedName}</span>
        )}
        <TypingCursor visible={!isComplete && !isTypingGreeting} />
      </h1>
    </div>
  );
}

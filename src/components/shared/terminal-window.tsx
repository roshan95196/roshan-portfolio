"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const terminalLines = [
  { prompt: "$", text: "dotnet new webapi -n InsurancePortal" },
  { prompt: "$", text: "dotnet build --configuration Release" },
  { prompt: ">", text: "Build succeeded. 0 Warning(s)" },
  { prompt: "$", text: "npm run build" },
  { prompt: ">", text: "✓ Compiled successfully" },
  { prompt: "$", text: "deploying to IIS..." },
  { prompt: ">", text: "✓ Deployment complete" },
];

export function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev + 1) % (terminalLines.length + 2));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card overflow-hidden glow-primary">
      <div className="flex items-center gap-2 border-b border-border/50 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/80" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <div className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          roshan@dev ~ portfolio
        </span>
      </div>
      <div className="min-h-[220px] space-y-2 p-4 font-mono text-sm">
        <AnimatePresence mode="popLayout">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={`${line.text}-${i}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex gap-2"
            >
              <span
                className={
                  line.prompt === "$"
                    ? "text-emerald-500"
                    : "text-primary"
                }
              >
                {line.prompt}
              </span>
              <span className="text-foreground/90">{line.text}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block h-4 w-2 bg-primary"
        />
      </div>
    </div>
  );
}

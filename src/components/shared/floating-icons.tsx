"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Layers,
  Shield,
  Zap,
} from "lucide-react";

const icons = [
  { Icon: Code2, label: ".NET", delay: 0, x: "10%", y: "15%" },
  { Icon: Globe, label: "React", delay: 0.5, x: "75%", y: "10%" },
  { Icon: Database, label: "SQL", delay: 1, x: "85%", y: "55%" },
  { Icon: Shield, label: "JWT", delay: 1.5, x: "5%", y: "60%" },
  { Icon: Layers, label: "API", delay: 2, x: "50%", y: "80%" },
  { Icon: Zap, label: "Core", delay: 2.5, x: "30%", y: "25%" },
];

export function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {icons.map(({ Icon, label, delay, x, y }) => (
        <motion.div
          key={label}
          className="absolute flex h-12 w-12 items-center justify-center rounded-xl glass glow-primary"
          style={{ left: x, top: y }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4 + delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
          aria-hidden="true"
        >
          <Icon className="h-5 w-5 text-primary" />
        </motion.div>
      ))}
    </div>
  );
}

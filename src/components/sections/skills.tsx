"use client";

import {
  Database,
  Layers,
  Layout,
  Server,
  Shield,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionHeader } from "@/components/shared/section-header";
import { GlassCard } from "@/components/shared/glass-card";
import { MotionContainer, MotionItem } from "@/components/shared/motion-container";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, LucideIcon> = {
  Server,
  Layout,
  Layers,
  Database,
  Shield,
  Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-max">
        <SectionHeader
          label="Skills"
          title="Technical Expertise"
          description="A comprehensive toolkit for building secure, scalable enterprise applications."
        />

        <MotionContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] ?? Server;
            return (
              <MotionItem key={category.title}>
                <GlassCard className="group h-full hover:glow-primary">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-secondary/10 text-foreground hover:bg-secondary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </GlassCard>
              </MotionItem>
            );
          })}
        </MotionContainer>
      </div>
    </section>
  );
}

"use client";

import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/shared/section-header";
import { GlassCard } from "@/components/shared/glass-card";
import { MotionContainer, MotionItem } from "@/components/shared/motion-container";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-max">
        <SectionHeader
          label="Projects"
          title="Featured Work"
          description="Enterprise applications built for the insurance industry with measurable impact."
        />

        <MotionContainer className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <MotionItem key={project.title}>
              <GlassCard className="group flex h-full flex-col hover:glow-primary">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.metrics && (
                  <div className="mb-4 flex gap-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-lg bg-primary/10 px-3 py-1.5 text-center"
                      >
                        <p className="text-lg font-bold text-primary">
                          {metric.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mb-4">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Features
                  </p>
                  <ul className="grid grid-cols-2 gap-1.5">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-1.5 text-sm text-muted-foreground"
                      >
                        <span className="h-1 w-1 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </MotionItem>
          ))}
        </MotionContainer>
      </div>
    </section>
  );
}

"use client";

import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/shared/section-header";
import { GlassCard } from "@/components/shared/glass-card";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { MotionContainer, MotionItem } from "@/components/shared/motion-container";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionHeader
          label="About"
          title="Crafting Enterprise Solutions"
          description={profile.about}
        />

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {profile.highlights.map((highlight) => (
            <Badge key={highlight} variant="outline" className="px-4 py-1.5 text-sm">
              {highlight}
            </Badge>
          ))}
        </div>

        <MotionContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profile.stats.map((stat) => (
            <MotionItem key={stat.label}>
              <GlassCard className="text-center hover:glow-primary">
                <p className="text-3xl font-bold gradient-text">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </GlassCard>
            </MotionItem>
          ))}
        </MotionContainer>
      </div>
    </section>
  );
}

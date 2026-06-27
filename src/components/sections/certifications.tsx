"use client";

import { Award } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionHeader } from "@/components/shared/section-header";
import { GlassCard } from "@/components/shared/glass-card";
import { MotionContainer, MotionItem } from "@/components/shared/motion-container";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-max">
        <SectionHeader
          label="Certifications"
          title="Continuous Learning"
          description="Investing in professional growth and industry-recognized credentials."
        />

        <MotionContainer className="mx-auto max-w-2xl">
          {certifications.map((cert) => (
            <MotionItem key={cert.title}>
              <GlassCard className="flex items-start gap-4 hover:glow-primary">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{cert.title}</h3>
                  {cert.certificatePath ? (
                    <a
                      href={cert.certificatePath}
                      download
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {cert.issuer}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-primary">
                      {cert.issuer}
                    </p>
                  )}
                  {cert.description && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  )}
                </div>
              </GlassCard>
            </MotionItem>
          ))}
        </MotionContainer>
      </div>
    </section>
  );
}

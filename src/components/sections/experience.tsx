"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/shared/section-header";
import { GlassCard } from "@/components/shared/glass-card";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          description="Building enterprise-grade solutions in the insurance technology domain."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          {experience.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="absolute left-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-primary ring-4 ring-background md:left-1/2">
                <span className="sr-only">Timeline point</span>
              </div>

              <div className="ml-14 md:ml-0">
                <GlassCard className="hover:glow-primary">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{item.company}</h3>
                        <p className="text-sm text-primary">{item.position}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {item.duration}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {item.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

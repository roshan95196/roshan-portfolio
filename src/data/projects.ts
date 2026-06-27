import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Ebix Insurance Portal",
    description:
      "Enterprise B2B insurance platform enabling brokers and agents to compare, issue, and manage insurance policies.",
    features: [
      "Premium calculation",
      "Proposal creation",
      "KYC verification",
      "Payment workflows",
      "Policy issuance",
      "Real-time insurer integrations",
    ],
    techStack: [".NET Core", "React.js", "SQL Server", "ADO.NET"],
    metrics: [
      { label: "Insurer APIs", value: "10+" },
      { label: "Performance", value: "+40%" },
    ],
  },
  {
    title: "Ebix Insurance CRM",
    description:
      "Modern CRM platform for managing leads, claims, onboarding, reports, and agent operations.",
    features: [
      "JWT Authentication",
      "RBAC",
      "Pagination",
      "Filtering",
      "Search",
      "Reporting Dashboard",
    ],
    techStack: [".NET Core 8", "React.js", "MySQL"],
  },
];

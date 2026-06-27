import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    icon: "Server",
    skills: [
      "C#",
      "ASP.NET Core",
      ".NET 6/8",
      "Web API",
      "MVC",
      "Entity Framework Core",
      "ADO.NET",
    ],
  },
  {
    title: "Frontend",
    icon: "Layout",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Architecture",
    icon: "Layers",
    skills: [
      "Clean Architecture",
      "SOLID Principles",
      "Design Patterns",
      "Dependency Injection",
    ],
  },
  {
    title: "Database",
    icon: "Database",
    skills: [
      "SQL Server",
      "MySQL",
      "Stored Procedures",
      "Query Optimization",
    ],
  },
  {
    title: "Security",
    icon: "Shield",
    skills: [
      "JWT",
      "RBAC",
      "OAuth 2.0",
      "Secure API Design",
      "VAPT Remediation",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "Wrench",
    skills: ["Git", "GitLab CI/CD", "IIS", "Swagger", "Postman", "SoapUI"],
  },
];

import type { Metadata } from "next";
import { profile } from "@/data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://roshankumar.dev";

export const siteConfig = {
  name: "Roshan Kumar",
  title: "Roshan Kumar | Senior .NET Full Stack Developer",
  description:
    "Senior .NET Full Stack Developer specializing in ASP.NET Core, React, RESTful APIs, and scalable enterprise applications.",
  url: siteUrl,
  email: "roshankumar95196@gmail.com",
  location: "Noida, India",
  keywords: [
    "Roshan Kumar",
    ".NET Developer",
    "ASP.NET Core",
    "React Developer",
    "Full Stack Developer",
    "REST API",
    "Enterprise Applications",
    "Noida",
    "India",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: ".NET Full Stack Developer",
    email: siteConfig.email,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressCountry: "IN",
    },
    knowsAbout: [
      "ASP.NET Core",
      "React.js",
      "REST APIs",
      "SQL Server",
      "Entity Framework Core",
      "JWT Authentication",
      "Enterprise Software",
    ],
    sameAs: [profile.social.linkedin, profile.social.github],
  };
}

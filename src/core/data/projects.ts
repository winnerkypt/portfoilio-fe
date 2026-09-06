import { Project } from "./types/Project";

export const projects: Project[] = [
    {
        id: "1",
        name: "EDU CU",
        description: "A website for collecting various information about the Faculty of Education, Chulalongkorn University, including scholarships, faculty personnel, and research.",
        image: "/images/projects/educu.png",
        link: "https://www.edu.chula.ac.th/th",
        tags: ["Next.js", "Tailwind CSS", "TypeScript"],
        createdAt: new Date("2023-01-01"),
    },
    {
        id: "2",
        name: "Reborna Creative",
        description: "[UAT] Line Official Account (Line OA) for Reborna TikTok Affiliates (Campaign and Account Status Management Platform)",
        image: "/images/projects/rbn.png",
        link: "https://lin.ee/TEpzE7o",
        tags: ["Next.js", "Tailwind CSS", "TypeScript"],
        createdAt: new Date("2023-01-01"),
    },
    {
        id: "3",
        name: "Troika Syndicate",
        description: "Troika Syndicate website showcasing their projects.",
        image: "/images/projects/troika.png",
        link: "https://troikasyndicate.com/",
        tags: ["Next.js", "Tailwind CSS", "TypeScript"],
        createdAt: new Date("2023-01-01"),
    },
    {
        id: "4",
        name: "Systems Dot Com",
        description: "Systems Dot Com website showcasing their projects and service.",
        image: "/images/projects/sdc.png",
        link: "https://www.systems.co.th/th",
        tags: ["React", "API", "CSS"],
        createdAt: new Date("2023-02-15"),
    },
    {
        id: "5",
        name: "KSec Product Landing Page",
        description: "Landing page for KASIKORN Securities products such as Structured Note, Primary Bond, Secondary Bond, and Global Invest.",
        image: "/images/projects/ks_structured.png",
        link: "https://www.kasikornsecurities.com/ks_product/StructuredNote",
        tags: ["Node.js", "Express", "MongoDB"],
        createdAt: new Date("2023-03-10"),
    },
]
import { Project } from "./types/Project";

export const projects: Project[] = [
    {
        id: "1",
        name: "Troika Syndicate",
        description: "A personal portfolio website showcasing my projects and skills.",
        image: "/images/projects/troika.png",
        link: "https://troikasyndicate.com/",
        tags: ["Next.js", "Tailwind CSS", "TypeScript"],
        createdAt: new Date("2023-01-01"),
    },
    {
        id: "2",
        name: "Systems Dot Com",
        description: "A weather application providing real-time weather updates.",
        image: "/images/projects/sdc.png",
        link: "https://www.systems.co.th/th",
        tags: ["React", "API", "CSS"],
        createdAt: new Date("2023-02-15"),
    },
    {
        id: "3",
        name: "KSec Structured Note",
        description: "An e-commerce platform for buying and selling products online.",
        image: "/images/projects/ks_structured.png",
        link: "https://www.kasikornsecurities.com/ks_product/StructuredNote",
        tags: ["Node.js", "Express", "MongoDB"],
        createdAt: new Date("2023-03-10"),
    },
]
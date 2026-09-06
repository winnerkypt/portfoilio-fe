export interface ContactLink {
  id: string;
  label: string;
  href: string;
  icon: "phone" | "email" | "github" | "linkedin";
}

export const contactLinks: ContactLink[] = [
  { id: "phone", label: "090-595-3589", href: "tel:0905953589", icon: "phone" },
  {
    id: "email",
    label: "kanyapat.witta@gmail.com",
    href: "mailto:kanyapat.witta@gmail.com",
    icon: "email",
  },
  {
    id: "github",
    label: "winnerkypt",
    href: "https://github.com/winnerkypt",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "Kanyapat Wittayamanitkul",
    href: "https://www.linkedin.com/in/kanyapat-wittayamanitkul-5935011a0/",
    icon: "linkedin",
  },
];

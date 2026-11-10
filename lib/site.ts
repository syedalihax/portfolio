export const name = "Syed Ali";
export const url = "https://www.syedalihax.com";
export const email = "hello@syedalihax.com";
export const phone = "+92 318 3179797";
export const whatsappUrl = "https://wa.me/923183179797";
export const formspreeEndpoint = "xyeeaaqq";
export const positioning =
  "I fix broken sites, build one-pagers, and hand over something you can update yourself. Fixed price, fixed date, no account managers.";
export const location = "Quetta, Pakistan";
export const availability = "Remote worldwide";

export const nav = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/syedalihax" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/syedalihax" },
  { label: "Facebook", href: "https://www.facebook.com/syedalihax" },
  { label: "Instagram", href: "https://www.instagram.com/syedali.hax" },
] as const;

export const projects = [
  {
    number: "01",
    name: "Easy-Parking",
    href: "/work/easy-parking",
    problem: "Parking operators tracked monthly members, walk-ins and unpaid dues on paper.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/shots/easyparking.webp",
    imageAlt:
      "Easy-Parking monthly dues screen showing vehicle billing, payments and balances.",
    imageWidth: 1900,
    imageHeight: 950,
    liveUrl: "https://easy-parking-management.vercel.app/",
    codeUrl: "https://github.com/syedalihax/Easy-Parking",
  },
  {
    number: "02",
    name: "LapToPia",
    href: "/work/lapitopia",
    problem: "Hardware shoppers needed one storefront for laptops, PCs, servers and miners.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/shots/lapitopia.webp",
    imageAlt:
      "LapToPia hardware storefront featuring computer systems and product categories.",
    imageWidth: 1917,
    imageHeight: 1078,
    liveUrl: "https://laptopia-p.vercel.app/",
    codeUrl: "https://github.com/syedalihax/LapToPia",
  },
] as const;

export const offer = [
  {
    name: "Audit",
    price: 99,
    includes:
      "Full site check, three fixes, one working day. Credited against the build if you go ahead.",
    turnaround: "One working day",
  },
  {
    name: "Build",
    price: 199,
    includes:
      "A one-page site: hero, services, contact form, Google Business Profile, deployed and handed over.",
    turnaround: "Three days",
  },
  {
    name: "Build + booking",
    price: 499,
    includes:
      "Up to five pages, a booking or enquiry flow, a copywriting pass, deployed and handed over.",
    turnaround: "Seven days",
  },
] as const;

export const faqs = [
  {
    question: "What does the $99 audit include?",
    answer:
      "The $99 audit covers one specific issue on an existing site — a broken enquiry form, a layout that fails on mobile, or a page that will not load — and I deliver it within one working day.",
  },
  {
    question: "How fast can you turn around a build?",
    answer:
      "A one-page build ships in three days and a five-page build in seven, counted from the day I receive the content and any access I need.",
  },
  {
    question: "Do you work with clients outside Pakistan?",
    answer:
      "I work remotely from Quetta and coordinate with clients in Australia, the UK and the Gulf. The timeline is set in writing before the build starts.",
  },
  {
    question: "What do you build with?",
    answer:
      "I build with Next.js, TypeScript and Tailwind CSS, deploy on Vercel, and hand over the repository so you can update it later without me.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "I need a short description of the problem, any logins for the existing site, and one example of a site you like. That is enough to quote the scope and date.",
  },
] as const;

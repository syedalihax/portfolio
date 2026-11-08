export const name = "Syed Ali";
export const url = "https://syedalihax.com";
export const email = "hello@syedalihax.com";
export const phone = "+92 318 3179797";
export const whatsappUrl = "https://wa.me/923183179797";
export const formspreeEndpoint = "xyeeaaqq";
export const positioning = "I fix and build websites small businesses can actually run.";
export const location = "Quetta, Pakistan";
export const availability = "Remote worldwide · replies within one working day";

export const nav = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const offer = [
  {
    name: "Fix",
    price: 99,
    includes:
      "One specific repair on an existing site — a broken enquiry form, a layout that fails on phones, or a page that will not load.",
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
    name: "Build plus",
    price: 499,
    includes:
      "Up to five pages, a booking or enquiry flow, a copywriting pass, deployed and handed over.",
    turnaround: "Seven days",
  },
] as const;

export const faqs = [
  {
    question: "What does the $99 fix include?",
    answer:
      "The $99 fix covers one specific problem on an existing site — a broken enquiry form, a layout that fails on phones, or a page that will not load — and I deliver it within one working day.",
  },
  {
    question: "How fast can you turn around a build?",
    answer:
      "A one-page build ships in three days and a five-page build in seven, counted from the day I receive the content and any access I need.",
  },
  {
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes. I work remotely from Quetta and coordinate with clients across Australian, UK and Gulf time zones, replying within one working day.",
  },
  {
    question: "What do you build with?",
    answer:
      "I build with Next.js, TypeScript and Tailwind CSS, deploy on Vercel, and hand over the repository so you are not locked into me for later changes.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "A written description of the problem, any logins for the existing site, and one example of a site you like. Nothing else.",
  },
] as const;

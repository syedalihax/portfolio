import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Syed Ali Hax | Software Engineer",
    short_name: "Syed Ali Hax",
    description:
      "Portfolio of Syed Ali, Software Engineer for websites, web applications, and mobile apps.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F6F8",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/profile-photo.png",
        sizes: "500x499",
        type: "image/png",
      },
    ],
  };
}

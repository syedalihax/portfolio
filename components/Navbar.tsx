"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_INFO } from "@/lib/portfolio-data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E5EB] bg-[#F5F6F8]/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-[#14171C] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
        >
          {SITE_INFO.name} Hax
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#525B6C]"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#14171C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] ${pathname === link.href ? "text-[#14171C]" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            Let&apos;s Talk
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E5EB] bg-white text-[#14171C] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed inset-0 z-[60] md:hidden ${menuOpen ? "visible" : "invisible pointer-events-none"}`}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-[#14171C]/35 transition-opacity duration-300 motion-reduce:transition-none ${menuOpen ? "opacity-100" : "opacity-0"}`}
        />
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`absolute inset-y-0 right-0 flex h-dvh w-[min(20rem,88vw)] max-w-full flex-col border-l border-[#E2E5EB] bg-white px-6 py-5 shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-[#E2E5EB] pb-5">
            <span className="font-display text-lg font-bold text-[#14171C]">
              {SITE_INFO.name} Hax
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E5EB] bg-white text-[#14171C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`flex min-h-[44px] items-center rounded-md px-2 text-base font-medium text-[#14171C] transition-colors hover:bg-[#F5F6F8] focus-visible:outline-2 focus-visible:outline-[#2563EB] ${pathname === link.href ? "bg-[#F5F6F8]" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#2563EB] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8]"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "../lib/site";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-between gap-4 px-6 py-5">
      <a href="/" className="font-display text-2xl text-ink">
        Syed Ali
      </a>
      <button
        type="button"
        className="border border-rule px-3 py-2 font-mono text-meta text-ink md:hidden"
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      <nav
        id="primary-navigation"
        aria-label="Primary"
        className={`${isOpen ? "flex" : "hidden"} w-full flex-col gap-4 border-t border-rule pt-4 md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:pt-0`}
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            className={`border-b pb-1 font-mono text-meta text-muted hover:text-accent ${
              pathname === item.href ? "border-accent" : "border-transparent"
            }`}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

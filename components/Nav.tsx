"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "../lib/site";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--rule)] bg-[var(--paper)]">
      <div className="mx-auto flex h-[72px] w-full max-w-[1360px] items-center justify-between gap-4 px-[clamp(20px,4vw,56px)]">
        <div className="flex items-center gap-3">
          <a href="/" className="font-sans text-[15px] font-medium tracking-[-0.02em] text-ink">
            Syed Ali
          </a>
        </div>

        <nav
          aria-label="Primary"
          className={`${isOpen ? "flex" : "hidden"} absolute left-0 right-0 top-[72px] flex-col gap-4 border-b border-[var(--rule)] bg-[var(--paper)] px-[clamp(20px,4vw,56px)] py-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`font-mono text-[12px] uppercase tracking-[0.14em] ${
                pathname === item.href ? "text-ink" : "text-[var(--muted)] hover:text-ink"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="hidden min-h-[44px] items-center justify-center border border-[var(--ink)] bg-[var(--ink)] px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--paper)] md:inline-flex"
          >
            Start a project
          </a>
          <button
            type="button"
            className="inline-flex min-h-[44px] items-center justify-center border border-[var(--ink)] bg-transparent px-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink md:hidden"
            aria-controls="primary-navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { nav } from "../lib/site";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 border-b border-rule bg-paper/95">
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-4">
          <a href="/" className="font-display text-[1.8rem] leading-none text-ink">
            Syed Ali
          </a>
          <div className="hidden items-center gap-2 md:flex">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--signal)]" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink">
              Available for work
            </span>
          </div>
        </div>

        <button
          type="button"
          className="border border-rule px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink md:hidden"
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={`${isOpen ? "flex" : "hidden"} absolute left-6 right-6 top-full flex-col gap-4 border-b border-rule bg-paper pb-4 pt-4 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:pb-0 md:pt-0`}
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                pathname === item.href ? "text-ink" : "text-muted hover:text-ink"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

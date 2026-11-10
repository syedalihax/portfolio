import { email, name, phone, socials, whatsappUrl } from "../lib/site";

export default function Footer() {
  return (
    <footer className="band-ink">
      <div className="mx-auto grid w-full max-w-[1360px] gap-6 px-[clamp(20px,4vw,56px)] py-8 md:grid-cols-3 md:items-center">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted-inv)]">
            {name}
          </p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted-inv)]">
            Web Developer
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="me noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--paper)]"
            >
              {social.label}
            </a>
          ))}
        </div>

        <div className="md:text-right">
          <a
            href={`mailto:${email}`}
            className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--paper)]"
          >
            {email}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp: ${phone}`}
            className="mt-3 block font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--paper)]"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

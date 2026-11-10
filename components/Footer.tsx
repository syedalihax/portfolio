import { email, name, phone, socials, whatsappUrl } from "../lib/site";

export default function Footer() {
  return (
    <footer className="band-ink">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-6 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[rgba(247,244,238,0.7)]">
          {name} · Web Developer
        </p>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href={`mailto:${email}`}
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper underline-offset-4 hover:underline"
          >
            {email}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp: ${phone}`}
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper underline-offset-4 hover:underline"
          >
            WhatsApp
          </a>
          {socials
            .filter((social) => social.href !== "TODO")
            .map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="me noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper underline-offset-4 hover:underline"
              >
                {social.label}
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
}

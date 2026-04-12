import Link from "next/link";

import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-full border border-white/10 bg-panel/75 px-5 py-3 shadow-soft backdrop-blur">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/8 via-transparent to-secondary/10" />
        <div className="relative flex items-center justify-between gap-4">
          <Link className="flex items-center gap-3" href="/">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-sm font-semibold text-white">
              ID
            </span>
            <div>
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-white">
                IPSHU
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-white/[0.55]">
                Frontend portfolio
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="#contact" variant="secondary">
              Let&apos;s Connect
            </Button>
          </div>

          <MobileNav links={navLinks} />
        </div>
      </div>
    </header>
  );
}

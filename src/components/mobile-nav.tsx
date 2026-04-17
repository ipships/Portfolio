"use client";

import Link from "next/link";
import { useState } from "react";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  links: Array<{ label: string; href: string }>;
};

export function MobileNav({ links }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        aria-expanded={open}
        aria-label="Toggle navigation"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/10 bg-surface text-text transition hover:bg-surface-strong"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span
          className={cn(
            "relative block h-3.5 w-4",
            "[&_span]:absolute [&_span]:left-0 [&_span]:block [&_span]:h-0.5 [&_span]:w-4 [&_span]:rounded-full [&_span]:bg-text [&_span]:transition"
          )}
        >
          <span className={cn(open ? "top-1.5 rotate-45" : "top-0")} />
          <span className={cn(open ? "top-1.5 opacity-0" : "top-1.5")} />
          <span className={cn(open ? "top-1.5 -rotate-45" : "top-3")} />
        </span>
      </button>

      <div
        className={cn(
          "absolute inset-x-4 top-[78px] rounded-[28px] border border-line/10 bg-panel-strong/95 p-5 shadow-soft backdrop-blur transition duration-300",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-2">
          {links.map((link) => (
            <Link
              className="rounded-2xl px-4 py-3 text-sm text-text-soft transition hover:bg-surface hover:text-text"
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-4">
          <ThemeSwitcher mobile />
        </div>
        <Button
          className="mt-4 w-full"
          href="#contact"
          onClick={() => setOpen(false)}
          variant="primary"
        >
          Let&apos;s Connect
        </Button>
      </div>
    </div>
  );
}

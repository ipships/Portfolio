import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  asChild?: false;
  href?: never;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

type LinkButtonProps = Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
  asChild?: false;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

type Props = ButtonProps | LinkButtonProps;

const variants = {
  primary:
    "border-accent/60 bg-accent/[0.15] text-text shadow-glow hover:-translate-y-0.5 hover:bg-accent/20 hover:text-text",
  secondary:
    "border-line/10 bg-surface text-text hover:-translate-y-0.5 hover:border-line/20 hover:bg-surface-strong",
  ghost:
    "border-transparent bg-transparent text-text-soft hover:bg-surface-soft hover:text-text"
};

const sharedClassName =
  "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60";

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: Props) {
  const classes = cn(sharedClassName, variants[variant], className);

  if ("href" in props) {
    const { href, ...linkProps } = props;
    const rel =
      linkProps.target === "_blank"
        ? linkProps.rel ?? "noreferrer"
        : linkProps.rel;

    return (
      <Link className={classes} href={href} {...linkProps} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

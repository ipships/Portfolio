"use client";

import { useEffect, useState } from "react";

import {
  applyTheme,
  darkAccentOptions,
  defaultTheme,
  readStoredTheme,
  type DarkAccent,
  type ThemeMode
} from "@/lib/theme";
import { cn } from "@/lib/utils";

type ThemeSwitcherProps = {
  mobile?: boolean;
};

export function ThemeSwitcher({ mobile = false }: ThemeSwitcherProps) {
  const [mode, setMode] = useState<ThemeMode>(defaultTheme.mode);
  const [accent, setAccent] = useState<DarkAccent>(defaultTheme.accent);

  useEffect(() => {
    const storedTheme = readStoredTheme();
    setMode(storedTheme.mode);
    setAccent(storedTheme.accent);
    applyTheme(storedTheme.mode, storedTheme.accent, false);
  }, []);

  const updateMode = (nextMode: ThemeMode) => {
    setMode(nextMode);
    applyTheme(nextMode, accent);
  };

  const updateAccent = (nextAccent: DarkAccent) => {
    setAccent(nextAccent);
    applyTheme(mode, nextAccent);
  };

  return (
    <div
      className={cn(
        "rounded-[24px] border border-line/12 bg-panel/80 shadow-soft backdrop-blur",
        mobile ? "space-y-4 p-4" : "flex items-center gap-3 px-3 py-2"
      )}
    >
      <div className={cn("flex items-center gap-2", mobile ? "justify-between" : "")}>
        {mobile ? (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-text-muted">
            Theme
          </p>
        ) : null}
        <div className="flex rounded-full border border-line/10 bg-surface-soft p-1">
          {(["dark", "light"] as const).map((option) => {
            const active = mode === option;

            return (
              <button
                aria-pressed={active}
                className={cn(
                  "rounded-full px-3 py-2 text-xs font-medium uppercase tracking-[0.24em] transition",
                  active
                    ? "bg-accent text-bg shadow-glow"
                    : "text-text-muted hover:bg-surface hover:text-text"
                )}
                key={option}
                onClick={() => updateMode(option)}
                type="button"
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div className={cn("flex items-center gap-2", mobile ? "justify-between" : "")}>
        {mobile ? (
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-text-muted">
            Dark Accent
          </p>
        ) : (
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-text-muted">
            Accent
          </span>
        )}
        <div className="flex items-center gap-2">
          {darkAccentOptions.map((option) => {
            const active = accent === option.value;

            return (
              <button
                aria-label={`${option.label} dark theme`}
                aria-pressed={active}
                className={cn(
                  "relative h-9 w-9 rounded-full border transition",
                  active ? "scale-105 border-text/50" : "border-line/12 hover:border-line/30",
                  mode === "light" ? "opacity-60" : "opacity-100"
                )}
                key={option.value}
                onClick={() => updateAccent(option.value)}
                type="button"
              >
                <span
                  className="absolute inset-[3px] rounded-full"
                  style={{ backgroundImage: option.preview }}
                />
                <span
                  className={cn(
                    "absolute inset-0 rounded-full ring-2 ring-offset-2 ring-offset-panel transition",
                    active ? "ring-text/70" : "ring-transparent"
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

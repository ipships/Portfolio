export const THEME_MODE_STORAGE_KEY = "portfolio-theme-mode";
export const THEME_ACCENT_STORAGE_KEY = "portfolio-theme-accent";

export type ThemeMode = "dark" | "light";
export type DarkAccent = "ocean" | "purple" | "red";

export const defaultTheme = {
  mode: "dark" as ThemeMode,
  accent: "ocean" as DarkAccent
};

export const darkAccentOptions: Array<{
  value: DarkAccent;
  label: string;
  preview: string;
}> = [
  {
    value: "ocean",
    label: "Ocean",
    preview: "linear-gradient(135deg, rgb(66 240 210), rgb(123 148 255), rgb(255 150 224))"
  },
  {
    value: "purple",
    label: "Purple",
    preview: "linear-gradient(135deg, rgb(196 136 255), rgb(122 105 255), rgb(255 134 209))"
  },
  {
    value: "red",
    label: "Red",
    preview: "linear-gradient(135deg, rgb(255 102 126), rgb(255 151 92), rgb(255 214 120))"
  }
];

const themeColors = {
  light: "#f4f6fa",
  ocean: "#090d18",
  purple: "#120a1f",
  red: "#180a0d"
} as const;

export function getThemeMetaColor(mode: ThemeMode, accent: DarkAccent) {
  return mode === "light" ? themeColors.light : themeColors[accent];
}

export function resolveHtmlAccent(mode: ThemeMode, accent: DarkAccent) {
  return mode === "light" ? "light" : accent;
}

export function readStoredTheme() {
  if (typeof window === "undefined") {
    return defaultTheme;
  }

  const storedMode = window.localStorage.getItem(THEME_MODE_STORAGE_KEY);
  const storedAccent = window.localStorage.getItem(THEME_ACCENT_STORAGE_KEY);

  const mode: ThemeMode =
    storedMode === "light" || storedMode === "dark"
      ? storedMode
      : defaultTheme.mode;
  const accent: DarkAccent =
    storedAccent === "purple" || storedAccent === "red" || storedAccent === "ocean"
      ? storedAccent
      : defaultTheme.accent;

  return { mode, accent };
}

export function applyTheme(mode: ThemeMode, accent: DarkAccent, persist = true) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  root.dataset.mode = mode;
  root.dataset.accent = resolveHtmlAccent(mode, accent);
  root.style.colorScheme = mode;

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.setAttribute("content", getThemeMetaColor(mode, accent));
  }

  if (persist && typeof window !== "undefined") {
    window.localStorage.setItem(THEME_MODE_STORAGE_KEY, mode);
    window.localStorage.setItem(THEME_ACCENT_STORAGE_KEY, accent);
  }
}

export const themeInitScript = `(() => {
  try {
    const modeKey = "${THEME_MODE_STORAGE_KEY}";
    const accentKey = "${THEME_ACCENT_STORAGE_KEY}";
    const storedMode = window.localStorage.getItem(modeKey);
    const storedAccent = window.localStorage.getItem(accentKey);
    const mode = storedMode === "light" || storedMode === "dark" ? storedMode : "${defaultTheme.mode}";
    const accent =
      storedAccent === "purple" || storedAccent === "red" || storedAccent === "ocean"
        ? storedAccent
        : "${defaultTheme.accent}";
    const root = document.documentElement;
    root.dataset.mode = mode;
    root.dataset.accent = mode === "light" ? "light" : accent;
    root.style.colorScheme = mode;

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      const color =
        mode === "light"
          ? "${themeColors.light}"
          : accent === "purple"
            ? "${themeColors.purple}"
            : accent === "red"
              ? "${themeColors.red}"
              : "${themeColors.ocean}";
      meta.setAttribute("content", color);
    }
  } catch {}
})();`;

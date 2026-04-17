import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        "panel-strong": "rgb(var(--panel-strong) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-strong": "rgb(var(--surface-strong) / <alpha-value>)",
        "surface-soft": "rgb(var(--surface-soft) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        "text-soft": "rgb(var(--text-soft) / <alpha-value>)",
        "text-muted": "rgb(var(--text-muted) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        tertiary: "rgb(var(--tertiary) / <alpha-value>)",
        "grid-line": "rgb(var(--grid-line) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgb(var(--line) / 0.08), 0 24px 80px rgb(var(--accent) / 0.18)",
        soft: "0 24px 60px rgb(var(--shadow) / 0.24)"
      },
      backgroundImage: {
        grid:
          "linear-gradient(to right, rgb(var(--grid-line) / 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--grid-line) / 0.08) 1px, transparent 1px)"
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
        orbit: "orbit 12s linear infinite",
        marquee: "marquee 18s linear infinite",
        blink: "blink 1.2s steps(2, start) infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.95", transform: "scale(1.08)" }
        },
        orbit: {
          from: { transform: "rotate(0deg) translateX(72px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(72px) rotate(-360deg)" }
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" }
        }
      }
    }
  },
  plugins: []
};

export default config;

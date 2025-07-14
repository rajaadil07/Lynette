import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
        inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        lora: ["var(--font-lora)", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        // Brand Colors from Guidelines
        brand: {
          dark: "#1B1B1F",        // Primary background and base UI
          gray: "#3C3C44",        // Body text, input fields
          light: "#F8F9FA",       // Primary background contrast
          blue: "#5D9CEC",        // Accent, CTA buttons
          yellow: "#FBC02D",      // Highlights, emphasis, features
        },
        
        // Semantic color mappings using brand colors
        border: "hsl(var(--border))",
        input: "#3C3C44",           // Brand gray for inputs
        ring: "#5D9CEC",            // Brand blue for focus rings
        background: "#1B1B1F",      // Brand dark for background
        foreground: "#F8F9FA",      // Brand light for text
        primary: {
          DEFAULT: "#5D9CEC",       // Brand blue
          foreground: "#F8F9FA",    // Brand light
        },
        secondary: {
          DEFAULT: "#3C3C44",       // Brand gray
          foreground: "#F8F9FA",    // Brand light
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#3C3C44",       // Brand gray
          foreground: "#F8F9FA",    // Brand light
        },
        accent: {
          DEFAULT: "#FBC02D",       // Brand yellow for accents
          foreground: "#1B1B1F",    // Brand dark for accent text
        },
        popover: {
          DEFAULT: "#1B1B1F",       // Brand dark
          foreground: "#F8F9FA",    // Brand light
        },
        card: {
          DEFAULT: "#1B1B1F",       // Brand dark
          foreground: "#F8F9FA",    // Brand light
        },
      },
    },
  },
};

export default config; 
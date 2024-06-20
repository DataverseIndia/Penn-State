/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/theme';
export const darkMode = ["class"];
export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
  "./node_modules/@nextui-org/theme/dist/components/(button|card|image|ripple|spinner).js"
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    fontFamily: {
      "roboto-sans": ["Roboto", "sans-serif"],
      "roboto-serif": ["Roboto Serif", "serif"]
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
  screens: {
    keypad: "180px",
    phone: "360px",
    xs: "480px",
    s: "624px",
    sm: "768px",
    tablet: "914px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
export const plugins = [require("tailwindcss-animate"), nextui()];

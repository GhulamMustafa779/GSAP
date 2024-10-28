import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backfaceVisibility: {
        visible: "visible",
        hidden: "hidden",
      },
      perspective: {
        none: "none",
        "500": "500px",
        "1000": "1000px",
      },
      translate: {
        "1": "1px",
        "150": "150px",
        "300": "300px",
      },
      rotate: {
        "0": "0",
        "30": "30deg",
        "45": "45deg",
        "60": "60deg",
        "90": "90deg",
        "180": "180deg",
        "270": "270deg",
      },
    },
  },
  variants: {
    extend: {
      transformStyle: ["responsive", "hover"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".backface-visible": {
          "backface-visibility": "visible",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          perspective: (value) => ({
            perspective: value,
          }),
        },
        {
          values: theme("perspective"),
          supportsNegativeValues: true,
        }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }),
        },
        { values: theme("translate"), supportsNegativeValues: true }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      // Rotate-X Utility
      matchUtilities(
        {
          "rotate-x": (value) => ({
            "--tw-rotate-x": value,
            transform:
              `rotateX(var(--tw-rotate-x)) ` +
              `rotateY(var(--tw-rotate-y, 0)) ` +
              `rotateZ(var(--tw-rotate-z, 0)) ` +
              `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) ` +
              `skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) ` +
              `scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
          }),
        },
        { values: theme("rotate"), supportsNegativeValues: true }
      );

      // Rotate-Y Utility
      matchUtilities(
        {
          "rotate-y": (value) => ({
            "--tw-rotate-y": value,
            transform:
              `rotateX(var(--tw-rotate-x, 0)) ` +
              `rotateY(var(--tw-rotate-y)) ` +
              `rotateZ(var(--tw-rotate-z, 0)) ` +
              `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) ` +
              `skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) ` +
              `scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
          }),
        },
        { values: theme("rotate"), supportsNegativeValues: true }
      );

      // Rotate-Z Utility
      matchUtilities(
        {
          "rotate-z": (value) => ({
            "--tw-rotate-z": value,
            transform:
              `rotateX(var(--tw-rotate-x, 0)) ` +
              `rotateY(var(--tw-rotate-y, 0)) ` +
              `rotateZ(var(--tw-rotate-z)) ` +
              `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) ` +
              `skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) ` +
              `scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`,
          }),
        },
        { values: theme("rotate"), supportsNegativeValues: true }
      );
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".flat": {
          "transform-style": "flat",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
export default config;

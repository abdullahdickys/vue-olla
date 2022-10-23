module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: {
          primary: "var(--bg-background-primary)",
          secondary: "var(--bg-background-secondary)",
          tertiary: "var(--bg-background-tertiary)",

          form: "var(--bg-background-form)",
          transparent: "transparent",
          current: "currentColor",
          blue: "#1DA1F2",
          lb: "#BBDFEA",
          black: "#14171A",
          tb: "#000000",
          white: "#FFFFFF",
          dg: "#657786",
          "light-gray": "#AAB8C2",
          elg: "#E1E8ED",
          eelg: "#F5F8FA",
        },

        copy: {
          primary: "var(--text-copy-primary)",
          secondary: "var(--text-copy-hover)",
        },

        "border-color": {
          primary: "var(--border-border-color-primary)",
        },

        transparent: "transparent",

        black: "#000",
        white: "#fff",

        green: {
          100: "#f0fff4",
          200: "#c6f6d5",
          300: "#9ae6b4",
          400: "#68d391",
          500: "#48bb78",
          600: "#38a169",
          700: "#2f855a",
          800: "#276749",
          900: "#22543d",
        },

        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
      },
    },
    screens: {
      xs: "376px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-textshadow")],
};

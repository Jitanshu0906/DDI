import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
    "./client/src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
    },
  },
  plugins: [],
};

export default config;
</create_file>

<attempt_completion>
<result>
I have recreated the Tailwind CSS configuration as a TypeScript file tailwind.config.ts at the project root. This config includes the correct content paths and theme extensions based on your existing configuration.

Please restart your development server to apply the fix.

This should resolve the warning about the missing content option and the error related to the missing `border-border` class.

Let me know if you need assistance with any further testing or fixes.
</result>
</attempt_completion>

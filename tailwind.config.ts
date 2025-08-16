import type { Config } from 'tailwindcss';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        a: {
                            color: "hsl(var(--primary))",
                            textDecoration: "underline",
                            "&:hover": {
                                color: "hsl(var(--primary-foreground))",
                            },
                        },
                        code: {
                            color: "#e11d48", // 원하는 색상 (예: rose-600)
                            backgroundColor: "#f1f5f9", // 살짝 배경 넣고 싶으면
                            padding: "0.2rem 0.4rem",
                            borderRadius: "0.25rem",
                            fontWeight: "600",
                        }
                    }
                }
            }
        },
    },
    plugins: [require('@tailwindcss/typography')],
} satisfies Config;
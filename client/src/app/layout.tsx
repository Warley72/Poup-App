import type { Metadata } from "next";
import { Poppins } from "next/font/google"

import "@/styles/globals.css";

import { ThemeProvider } from "../providers/theme-provider"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
    title: "PoupApp",
    icons: {
        icon: "/logo/icon.svg",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={poppins.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import { Roboto } from "next/font/google"
import "@/app/styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider"

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
    title: "PoupApp",
    icons: {
        icon: "/logo/Poup.svg",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={roboto.className}>
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

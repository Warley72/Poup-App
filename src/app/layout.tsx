import type { Metadata } from "next";

import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "PoupApp",
    icons: {
        icon: "/logo/logoPoupApp.png",
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

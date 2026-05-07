import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "RACE Conference — The InnerCity Mission for Children",
    description: "Reaching All Children Everywhere | R.A.C.E",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`h-full antialiased`}>
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}


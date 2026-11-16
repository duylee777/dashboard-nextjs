import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Authentication",
    description: "Authentication",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
        lang="en"
        className="h-full antialiased"
        suppressHydrationWarning
    >
        <body suppressHydrationWarning>
            {children}
        </body>
    </html>
  );
}
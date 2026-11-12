import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "Design Page",
    description: "Design page",
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
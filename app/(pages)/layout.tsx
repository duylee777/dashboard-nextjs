import "../globals.css";

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
import type { Metadata } from "next";
import "./globals.css";
import { Theme } from "@/components/providers/theme";
import { geistMono, geistSans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Fancy",
  description:
    "A fancy site created with Next.js, Tailwindcss, Shadcn/ui, and Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme attribute="class" defaultTheme="default" enableSystem>
          {children}
        </Theme>
      </body>
    </html>
  );
}

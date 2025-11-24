import type { Metadata } from "next";
import "./globals.css";
import { Theme } from "@/components/providers/theme";
import { geistMono, geistSans } from "@/lib/fonts";
import nextMetadata from "@/lib/next-metadata";

export const metadata: Metadata = nextMetadata();

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

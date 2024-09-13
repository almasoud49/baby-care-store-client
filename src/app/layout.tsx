import type { Metadata } from "next";
import localFont from "next/font/local";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import Providers from "@/libs/providers/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Baby Care Store",
  description: "Available all Types of Baby Care Items",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <div className="min-h-screen">
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </div>
        </Providers>
      </body>
    </html>
  );
}

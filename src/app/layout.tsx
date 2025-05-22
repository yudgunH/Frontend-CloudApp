import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { ClientProviders } from "@/app/providers/ClientProviders";
import Navbar from '@/components/navbar';
import { Footer } from '@/components/footer';
import Script from "next/script"; // Import Script từ Next.js
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AllDrama Movies",
  description: "Watch the latest drama films",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9G6QTCYQ3B" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9G6QTCYQ3B');
          `}
        </Script>


      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ClientProviders>
            <Navbar />
              {children}
            <Footer />
          </ClientProviders>
        </ThemeProvider>

        
      </body>
    </html>
  );
}

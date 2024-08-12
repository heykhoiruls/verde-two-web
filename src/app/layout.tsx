import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import CallActionButton from "./components/button/CallActionButton";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Verde Two",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
       {/* <GoogleTagManager gtmId="GTM-M548FV5" /> */}
      <body className="h-dvh">
        <Navbar />
        <CallActionButton />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}

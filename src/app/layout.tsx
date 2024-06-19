import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import CallActionButton from "./components/button/CallActionButton";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Verde Two",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
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

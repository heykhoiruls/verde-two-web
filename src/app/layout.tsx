import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar copy 2";
import CallActionButton from "./components/button/CallActionButton";

export const metadata: Metadata = {
  title: "Verde Two",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-dvh">
        <Navbar />
        <CallActionButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whitespace Project",
  description: "This is an assignment project named whitespace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`font-sans text-white grid`} >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

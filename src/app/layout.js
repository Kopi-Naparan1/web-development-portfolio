// my-app\src\app\layout.js

import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Header from "../components/ui/Heading";
import "./globals.css";
import Footer from "../components/layout/Footer";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kopi Anan Naparan Portfolio",
  description:
    "A portfolio website showcasing the projects and skills of Kopi Anan Naparan.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

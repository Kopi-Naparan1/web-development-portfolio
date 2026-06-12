import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Header from "../components/ui/Heading";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <head>
        <link
          rel="preload"
          as="image"
          href="/important-assets/homepage/hero/hero.webp"
          fetchPriority="high"
        />
      </head>
      <body className="">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

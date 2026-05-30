import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // include the weights you need
});

export const metadata = {
  title: "Kopi Anan Naparan Portfolio",
  description:
    "A portfolio website showcasing the projects and skills of Kopi Anan Naparan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="flex min-h-screen max-w-full flex-col">
        {/* <Header /> */}
        <main className="flex-1">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import HomePage from "./page";
import ResponsiveNav from '../components/Home/Navbar/ResponsiveNav'
import Footer from "@/components/Home/Footer/Footer";
import ScrollTop from "@/components/Helper/ScrollTop";
const font=Rethink_Sans({
  weight:['400','500','600','700','800'],
  subsets:['latin']
})
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Startup Landing Page",
  description: "Startup Landing Page using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollTop/>
      </body>
    </html>
  );
}

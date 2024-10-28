import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Navbar";

const geistSans = localFont({
  src: "./(fonts)/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./(fonts)/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GSAP - Home",
  description: "Shows all type of the gsap animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <Navbar/>
        <main  className='w-full h-[100vh] overflow-hidden '>
          <div className="w-full h-full overflow-y-auto p-[20px]">
          {children}
          </div>
        </main>
      </body>
    </html>
  );
}

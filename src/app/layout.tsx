import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Aside } from "@/components/aside";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <div className="w-[1200px] max-w-[90%] my-14 mx-auto flex gap-7 h-screen  ">
        <Aside />
        {children}
       </div>
      </body>
    </html>
  );
}

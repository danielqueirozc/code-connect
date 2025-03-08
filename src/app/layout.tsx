import type { Metadata } from "next";
import { Prompt } from 'next/font/google'
import "./globals.css";
import { Aside } from "@/components/aside";


const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
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
        className={`${prompt.className} antialiased`}
      >
       <div className="w-[1200px] max-w-[90%] my-14 mx-auto flex gap-7 h-screen  ">
        <Aside />
        {children}
       </div>
      </body>
    </html>
  );
}

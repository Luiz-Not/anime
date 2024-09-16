import type { Metadata } from "next";
import { cookies } from 'next/headers'

import "./globals.css";
import HeaderBar from "./components/header/HeaderBar";

import { Mulish } from 'next/font/google'
import FooterBar from "./components/footer/FooterBar";

const mulish = Mulish({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')

  return (
    <html lang="en" className={theme?.value || ''}>
      <body
        className={`${mulish.className} flex flex-col h-screen antialiased bg-white dark:bg-dark text-dark dark:text-white`}
      >
        <HeaderBar theme={theme?.value} />
        <div className="overflow-auto mt-[68px] h-full flex flex-col">
          <main className="p-6 flex flex-1 flex-col">{children}</main>
          <FooterBar />
        </div>
      </body>
    </html>
  );
}

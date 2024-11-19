import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import NavbarComponenet from "@/component/navbar/NavbarComponent";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cloudinator",
  description: "Your one-stop solution for all your cloud needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <NavbarComponenet />
        {children}
      </body>
    </html>
  );
}

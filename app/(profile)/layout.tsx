import type { Metadata } from "next"
import localFont from "next/font/local"
import "../globals.css"
import { SidebarProvider } from '@/components/ui/sidebar'
import DashboardLayout from "@/component/sidebar/DashboardLayout";


const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
    display: 'swap',
    preload: true,
})

const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
    display: 'swap',
    preload: true,
})

export const metadata: Metadata = {
    title: "Cloudinator",
    description: "Your one-stop solution for all your cloud needs",
    viewport: "width=device-width, initial-scale=1",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="bg-background font-sans min-h-screen">
        <SidebarProvider defaultOpen={true}>
            <DashboardLayout>{children}</DashboardLayout>
        </SidebarProvider>
        </body>
        </html>
    )
}
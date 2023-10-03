import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import SessionProvider from './SessionProvider'

const roboto = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'The Dojo',
    description: "Online leaderboards for games that don't have one",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Navbar />
            <body className={roboto.className}>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </body>
            <Footer />
        </html>
    )
}

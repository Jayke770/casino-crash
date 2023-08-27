import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Crash',
  description: 'Casino Crash',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark scroll-smooth'>
      <body className={`${inter.className} dark:bg-zinc-950 dark:text-zinc-100`}>{children}</body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins, Hind } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", '300', '400', '500', '600', '700', '800', '900'],
  style:['normal','italic'],
  variable: "--font-poppins",
  display:'swap'
});

const hind = Hind({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style:['normal'],
  variable:"--font-hind"
});

export const metadata: Metadata = {
  title: 'Ruboni Admin Dashboard',
  description: 'This app is for Ruboni Community camp administrators',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

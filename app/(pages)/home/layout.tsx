import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../../_components/navbar';


export const metadata: Metadata = {
  title: 'Portfolio:Home',
  description: 'portforlio: Emmanuel Michael, web developer and engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative bg-surface overflow-y-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  )
}

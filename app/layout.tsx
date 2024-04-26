import './globals.css';
import type { Metadata } from 'next';
import Navbar from './_components/navbar';

export const metadata: Metadata = { 
  title: 'PORTFOLIO | FRONTEND DEVELOPER', 
  description: 'Frontend Software Developer | Engineer. Emmanuel Michael Ayodeji, alias - Chocho',
  icons: {
    icon: "/assets/svgs/logo-light.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative bg-teal-900 w-full min-h-screen h-max flex flex-col overflow-y-scroll snap-y snap-mandatory">
        <link rel='icon' type='image/svg' href='/assets/svgs/logo-light.svg' />
        <Navbar />
        {children}
      </body>
    </html>
  )
}

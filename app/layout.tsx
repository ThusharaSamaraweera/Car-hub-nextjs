import { Navbar } from '@/components';
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer';


export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'relative'}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}

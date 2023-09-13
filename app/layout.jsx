import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spend Wise',
  description: 'Manage your money',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={inter.className} >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>

  )
};

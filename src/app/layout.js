import AppFooter from '@/components/AppFooter'
import AppNavbar from '@/components/AppNavbar'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Open Sacramento',
  description: 'Open Sacramento civic techonology.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppNavbar />
        {children}
        <AppFooter />
      </body>
    </html>
  )
}

import AppFooter from '@/components/AppFooter'
import AppNavbar from '@/components/AppNavbar'
import {Inter} from 'next/font/google'
import '../../styles/main.scss'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Open Sacramento',
  description: 'Open Sacramento civic technology.',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <AppNavbar/>
    <main>
    {children}
    </main>
    <AppFooter/>
    </body>
    </html>
  )
}

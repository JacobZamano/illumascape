import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Illumascape NW',
  description: 'Currently website is under construction.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gradient-to-r from-black to-gray-700">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

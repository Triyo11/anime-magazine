import { Playpen_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const playpen_sans = Playpen_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'CuyAnimeList',
  description: 'Indonesia Website Anime',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playpen_sans.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

import Header from './components/Header'

import './globals.css'
import { Nunito } from 'next/font/google'

type Props = {
  children: React.ReactNode
}

const nunito = Nunito({ subsets: ['latin'] })

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} container mx-auto min-h-screen max-w-screen-sm bg-[#211F20] px-4 text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}

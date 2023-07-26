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
        className={`${nunito.className} container min-h-screen bg-[#211F20] px-4 text-white`}
      >
        {children}
      </body>
    </html>
  )
}

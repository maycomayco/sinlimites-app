import './globals.css'
import { Hepta_Slab } from 'next/font/google'

type Props = {
  children: React.ReactNode
}

const hepta = Hepta_Slab({ subsets: ['latin'] })

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${hepta.className} container min-h-screen bg-neutral-600 px-4 text-white`}
      >
        {children}
      </body>
    </html>
  )
}

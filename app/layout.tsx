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
        className={`${hepta.className} container bg-neutral-600 text-white min-h-screen px-4`}
      >
        {children}
      </body>
    </html>
  )
}

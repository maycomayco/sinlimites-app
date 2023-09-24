import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="mx-auto flex items-center justify-center gap-4 p-6">
      <div className="shrink-0">
        <Link href="/">
          <Image
            alt="Sin Limites Training Logo"
            height={90}
            src="https://d1fdloi71mui9q.cloudfront.net/nTwbCUzTymqtqfWpMMds_cvWMkSuWko58WcFM"
            width={90}
          />
        </Link>
      </div>
      <div>
        <h1 className="text-3xl font-extrabold">Sin Limites</h1>
        <small>Donde nada ni nadie esta chequeado</small>
      </div>
    </div>
  )
}

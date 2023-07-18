import Image from 'next/image'

export default function Header() {
  return (
    <div className="p-6 mx-auto flex items-center justify-center gap-4">
      <div className="shrink-0">
        <Image
          alt="Sin Limites Training Logo"
          height={90}
          src="https://d1fdloi71mui9q.cloudfront.net/nTwbCUzTymqtqfWpMMds_cvWMkSuWko58WcFM"
          width={90}
        />
      </div>
      <div>
        <h1 className="text-4xl font-medium font-medium">Sin Limites</h1>
        <small className="">Donde nada ni nadie esta chequeado</small>
      </div>
    </div>
  )
}

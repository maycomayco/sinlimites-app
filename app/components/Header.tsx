import Image from 'next/image'

export default function Header() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <Image
          alt="ChitChat Logo"
          className="h-12 w-12"
          height={60}
          src="https://randomuser.me/api/portraits/men/77.jpg"
          width={60}
        />
      </div>
      <div>
        <h1 className="text-4xl font-medium text-black">Sin limites</h1>
        <small className="text-black">Donde nada ni nadie esta chequeado</small>
      </div>
    </div>
  )
}

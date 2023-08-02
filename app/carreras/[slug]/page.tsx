import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import api from '@/lib/api'

type Props = {
  params: { slug: string }
}

export default async function Race({ params: { slug } }: Props) {
  const race = await api.races.getBySlug(slug)

  return (
    <main className="relative flex min-h-screen flex-col bg-white text-black">
      <div className="relative block h-60 w-full">
        <Image
          fill
          alt={race.name}
          className="object-cover"
          src={race.imageUrl}
        />
      </div>
      <article className="flex flex-col gap-4 p-5">
        <h2 className="text-2xl font-bold">{race.name}</h2>
        <p>
          <strong>Fecha:</strong> {race.date}
        </p>
        <p>
          <strong>Lugar:</strong> {race.place}
        </p>
        <p>
          <strong>Distancias:</strong> {race.distance}
        </p>
        <p>
          <strong>Codigo:</strong> {race.discountCode}
        </p>
        <p>
          <strong>Descripcion:</strong> {race.description}
        </p>
        <button className="rounded-2xl bg-[#525252] p-2 text-white">
          <Link href={race.url} target="_blank">
            Link a la carrera
          </Link>
        </button>
      </article>
    </main>
  )
}

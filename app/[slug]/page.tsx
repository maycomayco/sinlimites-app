import { notFound } from 'next/navigation'

import api from '@/lib/api'

type Props = {
  params: { slug: string }
}

export default async function Page({ params: { slug } }: Props) {
  const links = await api.links.getAll()

  // const races = await api.races.fetch(slug)
  const link = links.find((link) => link.title === slug)

  if (!link) return notFound()

  const races = await api.races.fetch(link.link)

  return (
    <main>
      <h1>Carreras</h1>
      <br />
      <ul>
        {races.map((race) => (
          <li key={race.name.replace(' ', '-').toLowerCase()}>
            <p>{race.name}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

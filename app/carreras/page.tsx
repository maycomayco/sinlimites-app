import { notFound } from 'next/navigation'

import api from '@/lib/api'
import { toKebabCase } from '@/lib/utils'

import Header from '../components/Header'

const pageSlug = 'carreras'

export default async function Carreras() {
  const links = await api.links.getAll()

  const filteredLinks = links.filter(
    (link) => link.title.toLowerCase() === pageSlug,
  )

  if (filteredLinks.length === 0) return notFound()

  const races = await api.races.fetch(filteredLinks[0].link)

  return (
    <main>
      <Header />
      <h2>Carreras</h2>
      <hr />
      <ul>
        {races.map((race) => (
          <li key={toKebabCase(race.name)}>
            <p>{race.name}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

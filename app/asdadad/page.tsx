import { notFound } from 'next/navigation'

import api from '@/lib/api'
import { toKebabCase } from '@/lib/utils'

type Props = {
  params: { slug: string }
}

export default async function Page({ params: { slug } }: Props) {
  const kebabCaseSlug = toKebabCase(slug)
  const links = await api.links.getAll()

  // const races = await api.races.fetch(slug)
  const link = links.find((link) => link.title === kebabCaseSlug)

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

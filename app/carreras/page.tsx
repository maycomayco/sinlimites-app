import { notFound } from 'next/navigation'
import React from 'react'

import api from '@/lib/api'

import BoxLink from '../components/BoxLink'
import ListOfBoxLink from '../components/ListOfBoxLink'

const pageSlug = 'carreras'

export default async function Carreras() {
  const links = await api.links.getAll()

  const filteredLinks = links.filter(
    (link) => link.title.toLowerCase() === pageSlug,
  )

  if (filteredLinks.length === 0) return notFound()

  const races = await api.races.getAll(filteredLinks[0].link)

  console.log({ races })

  return (
    <main>
      <ListOfBoxLink>
        {races.map((race, idx) => (
          <React.Fragment key={idx}>
            <BoxLink content={race.name} path={pageSlug} />
          </React.Fragment>
        ))}
      </ListOfBoxLink>
    </main>
  )
}

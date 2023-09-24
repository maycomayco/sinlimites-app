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

  const racesByMonth = races.reduce((acc, race) => {
    const date = new Date(
      +race.date.split('/')[2],
      +race.date.split('/')[1] - 1,
      +race.date.split('/')[0],
    )
    const month = date.toLocaleString('es-AR', { month: 'long' }).toLowerCase()

    // controlo que el acc no contengo el mes mapeado aun
    if (!acc[month]) {
      acc[month] = []
    }

    // console.log(acc)
    acc[month].push(race)

    return acc
  }, [])

  return (
    <main>
      <h2 className="mb-4 text-2xl font-bold">Proximas Carreras</h2>
      <ListOfBoxLink>
        {Object.entries(racesByMonth).map((race, idx) => {
          return (
            <React.Fragment key={idx}>
              <h2>{race[0]}</h2>
              {race[1].map((r) => (
                <BoxLink content={r.name} path={pageSlug} />
              ))}
            </React.Fragment>
          )
        })}
      </ListOfBoxLink>
    </main>
  )
}

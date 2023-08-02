import React from 'react'

import api from '@/lib/api'

import BoxLink from './components/BoxLink'

export default async function Home() {
  const links = await api.links.getAll()

  return (
    <main>
      <ul className="flex flex-col gap-2">
        <BoxLink content="Sobre nosotros" />
        {links.map((link) => (
          <React.Fragment key={link.link}>
            <BoxLink content={link.title} />
          </React.Fragment>
        ))}
      </ul>
    </main>
  )
}

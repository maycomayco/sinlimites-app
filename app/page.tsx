import React from 'react'

import api from '@/lib/api'

import Header from './components/Header'
import BoxLink from './components/BoxLink'

export default async function Home() {
  const links = await api.links.getAll()

  return (
    <main>
      <Header />
      <ul className="flex flex-col gap-2">
        <BoxLink content="Sobre nosotros" link="/nosotros" />
        {links.map((link) => (
          <React.Fragment key={link.link}>
            <BoxLink content={link.title} link={link.link} />
          </React.Fragment>
        ))}
      </ul>
    </main>
  )
}

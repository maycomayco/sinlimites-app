import Link from 'next/link'

import api from '@/lib/api'

export default async function Home() {
  const links = await api.links.getAll()

  return (
    <main>
      <h1>Cantidad de usuarios: XX</h1>
      <ul>
        {links.map((link) => (
          <li key={link.link}>
            <Link href={`/${link.title}`}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

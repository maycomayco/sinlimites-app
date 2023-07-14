import { notFound } from 'next/navigation'

import api from '@/lib/api'

type Props = {
  params: { slug: string }
}

export default async function Page({ params: { slug } }: Props) {
  console.log(slug)
  const person = ''

  const users = await api.users.getAll()
  const user = users.find((user) => user.name === slug)

  if (!user) return notFound()

  const links = await api.links.fetch(user.url)

  return (
    <main>
      <h1>{user.name}</h1>
      <br />
      <ul>
        {links.map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </main>
  )
}

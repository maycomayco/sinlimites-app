import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'

import { toKebabCase } from '@/lib/utils'

type Props = {
  content: string
  path?: string
}

export default function BoxLink({ content, path }: Props) {
  const href = path
    ? `/${path}/${toKebabCase(content)}`
    : `/${toKebabCase(content)}`

  return (
    <li className="rounded-2xl border-2 border-solid border-black bg-white px-10 py-5 text-center text-black">
      <Link className="flex items-center justify-between text-xl" href={href}>
        <p>{content}</p>
        <FaAngleRight />
      </Link>
    </li>
  )
}

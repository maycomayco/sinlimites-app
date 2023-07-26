import Link from 'next/link'
import { FaAngleRight } from 'react-icons/fa6'

import { toKebabCase } from '@/lib/utils'

type Props = {
  content: string
}

export default function BoxLink({ content }: Props) {
  return (
    <li className="rounded-2xl border-2 border-solid border-black bg-white px-10 py-5 text-center text-black">
      <Link
        className="flex items-center justify-between text-xl"
        href={`/${toKebabCase(content)}`}
      >
        <p>{content}</p>
        <FaAngleRight />
      </Link>
    </li>
  )
}

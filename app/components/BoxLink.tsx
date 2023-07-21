import Link from 'next/link'

import { toKebabCase } from '@/lib/utils'

type Props = {
  content: string
}

export default function BoxLink({ content }: Props) {
  return (
    <li className="border-2 border-solid border-black bg-red-600 py-2 text-center">
      <Link href={`/${toKebabCase(content)}`}>{content}</Link>
    </li>
  )
}

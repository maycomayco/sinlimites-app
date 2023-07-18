import Link from 'next/link'

import { toKebabCase } from '@/lib/utils'

type Props = {
  link: string
  content: string
}

export default function BoxLink({ link, content }: Props) {
  return (
    <li className="bg-red-600 text-center py-2 border-solid border-black border-2">
      <Link href={toKebabCase(link)}>{content}</Link>
    </li>
  )
}

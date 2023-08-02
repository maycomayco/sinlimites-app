import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function ListOfBoxLink({ children }: Props) {
  return <ul className="flex flex-col gap-2">{children}</ul>
}

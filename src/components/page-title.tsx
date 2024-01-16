import { Icon } from '@phosphor-icons/react'

interface PageTitle {
  title: string
  IconTitle: Icon
}

export function PageTitle({ title, IconTitle }: PageTitle) {
  return (
    <h1 className="flex gap-3 text-2xl text-gray-100">
      <IconTitle className="h-8 w-8 text-green-100" />
      {title}
    </h1>
  )
}

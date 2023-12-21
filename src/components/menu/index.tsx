import Link from 'next/link'

import { Logo } from '../logo'
import { Background } from './background'

export function Menu() {
  return (
    <aside className="sticky top-5 ml-5 mt-5 flex h-[calc(100vh-2.5rem)] w-56 flex-col items-center overflow-clip rounded-xl bg-gray-700 pt-10">
      <Logo />

      <Background className="absolute bottom-0 left-0 right-0 top-0 -z-10" />
    </aside>
  )
}

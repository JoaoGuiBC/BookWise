'use client'

import Image from 'next/image'
import { Binoculars, ChartLineUp, User } from '@phosphor-icons/react/dist/ssr'

import { Logo } from '../logo'
import { MenuItem } from './menu-item'

export function Menu() {
  return (
    <aside className="py-5 pl-5">
      <div className="relative flex h-full max-h-[988px] flex-col items-center overflow-clip rounded-xl bg-gray-700 px-14 pt-10">
        <Logo />

        <Image
          src="/side-menu-background.png"
          alt="background gradient"
          width={224}
          height={988}
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-56"
        />

        <div className="z-20 mt-16 flex flex-col gap-4">
          <MenuItem PageIcon={ChartLineUp} href="/" title="Início" />
          <MenuItem PageIcon={Binoculars} href="/explorar" title="Explorar" />
          <MenuItem PageIcon={User} href="/perfil" title="Perfil" />
        </div>
      </div>
    </aside>
  )
}

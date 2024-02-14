'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SignOutButton, useUser } from '@clerk/nextjs'
import {
  User,
  SignIn,
  SignOut,
  Binoculars,
  ChartLineUp,
} from '@phosphor-icons/react'

import { Logo } from '../logo'
import { MenuItem } from './menu-item'

export function Menu() {
  const { isSignedIn, user } = useUser()

  return (
    <aside className="max-h-screen py-5 pl-5">
      <div className="relative flex h-full flex-col items-center overflow-clip rounded-xl bg-gray-700 px-14 pb-8 pt-10">
        <Logo />

        <Image
          src="/side-menu-background.png"
          alt="background gradient"
          width={224}
          height={988}
          quality={100}
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-56"
        />

        <div className="z-20 mt-16 flex flex-col gap-4">
          <MenuItem PageIcon={ChartLineUp} href="/" title="Início" />
          <MenuItem PageIcon={Binoculars} href="/explorar" title="Explorar" />
          {isSignedIn && (
            <MenuItem
              PageIcon={User}
              href={`/perfil/${user.id}`}
              title="Perfil"
            />
          )}
        </div>

        {isSignedIn ? (
          <SignOutButton>
            <button className="z-20 mt-auto flex w-full items-center justify-center gap-3 rounded-md hover:bg-gray-100/10">
              <span className="text-bold text-base/[160%] text-gray-200">
                Sair
              </span>
              <SignOut className="h-5 w-5 text-red-400" />
            </button>
          </SignOutButton>
        ) : (
          <Link
            href="/entrar"
            className="z-20 mt-auto flex w-full items-center justify-center gap-3 rounded-md hover:bg-gray-100/10"
          >
            <span className="text-bold text-base/[160%] text-gray-200">
              Login
            </span>
            <SignIn className="h-5 w-5 text-green-100" />
          </Link>
        )}
      </div>
    </aside>
  )
}

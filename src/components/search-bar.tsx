'use client'

import { twMerge } from 'tailwind-merge'
import type { ComponentProps, FormEvent } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'

type SearchBarProps = ComponentProps<'input'>

export function SearchBar({ className, ...props }: SearchBarProps) {
  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const { q: query } = Object.fromEntries(formData)

    if (!query) return null

    console.log(query)
  }

  return (
    <form
      onSubmit={handleSearch}
      className={twMerge(
        'inline-flex h-12 w-full max-w-sm gap-2 rounded border border-indigo-900 bg-neutral-900 px-5 py-3.5 text-indigo-900',
        'focus-within:border-cyan-800 focus-within:text-cyan-800 focus-within:shadow-md',
      )}
    >
      <input
        name="q"
        required
        type="text"
        className={twMerge(
          'flex-1 border-0 bg-transparent p-0 text-sm leading-snug text-slate-200 outline-none placeholder:text-slate-400',
          className,
        )}
        {...props}
      />

      <MagnifyingGlass className="h-5 w-5" />
    </form>
  )
}

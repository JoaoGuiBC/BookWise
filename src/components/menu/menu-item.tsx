'use client'

import Link from 'next/link'
import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@phosphor-icons/react'
import { usePathname } from 'next/navigation'

interface MenuItemProps {
  href: string
  PageIcon: Icon
  title: string
}

export function MenuItem({ href, PageIcon, title }: MenuItemProps) {
  const pathname = usePathname()

  const isSelected = useMemo(() => {
    return pathname === href
  }, [href, pathname])

  return (
    <Link href={href} className="relative flex items-center gap-3">
      {isSelected && (
        <motion.div
          layoutId="active-tab"
          className="absolute -left-4 bottom-0 top-0 w-1 rounded-full bg-gradient-vertical"
        />
      )}

      <PageIcon className="h-6 w-6 text-gray-400" />

      <span
        className={isSelected ? 'font-bold text-gray-100' : 'text-gray-400'}
      >
        {title}
      </span>
    </Link>
  )
}

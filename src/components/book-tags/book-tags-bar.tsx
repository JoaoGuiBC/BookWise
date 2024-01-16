'use client'

import * as ScrollArea from '@radix-ui/react-scroll-area'
import { BookTag } from './book-tag'

const TAGS = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
)

export function BookTagsBar() {
  return (
    <ScrollArea.Root className="w-full" type="hover">
      <ScrollArea.Viewport className="w-full overflow-x-scroll">
        <div className="flex w-full items-center gap-3">
          <BookTag title="Tudo" isSelected />
          {TAGS.map((tag) => (
            <BookTag title={tag} key={tag} />
          ))}
        </div>
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar
        className="flex h-px translate-y-2 touch-none select-none flex-col bg-transparent"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-purple-100" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  )
}

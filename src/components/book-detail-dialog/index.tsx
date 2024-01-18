'use client'

import Image from 'next/image'
import type { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { BookBookmark, BookOpen, X } from '@phosphor-icons/react/dist/ssr'

import { Review } from './review'
import { RatingBar } from '../rating-bar'

interface BookDetailDialog {
  children: ReactNode
}

export function BookDetailDialog({ children }: BookDetailDialog) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-show-overlay fixed inset-0 z-30 bg-black/60" />
        <Dialog.Content className="data-[state=open]:animate-show-content fixed bottom-0 right-0 top-0 z-40 w-[41.25rem] overflow-auto bg-gray-800 p-12 focus:outline-none">
          <div className="relative flex flex-col items-start justify-start gap-10 rounded-lg bg-gray-700 px-8 pb-4 pt-6">
            <Dialog.Close className="absolute -top-10 right-0">
              <X className="h-6 w-6 text-gray-400" />
            </Dialog.Close>

            <div className="flex gap-8">
              <Image
                src="https://via.placeholder.com/171x242"
                className="rounded"
                width={171}
                height={242}
                alt={`cover`}
              />

              <div className="inline-flex flex-col items-start justify-between">
                <div className="inline-flex flex-col gap-2">
                  <Dialog.Title className="text-lg font-bold leading-relaxed text-gray-100">
                    14 Hábitos de Desenvolvedores Altamente Produtivos
                  </Dialog.Title>

                  <span className="text-base font-normal leading-relaxed text-gray-300">
                    Autor
                  </span>
                </div>

                <div className="inline-flex flex-col items-start justify-center gap-1">
                  <RatingBar score={4} />
                  <span className="text-sm font-normal leading-snug text-gray-400">
                    4 avaliações
                  </span>
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-gray-600" />

            <div className="flex items-center gap-14 pb-6">
              <div className="flex items-center gap-4">
                <BookBookmark className="h-6 w-6 text-green-100" />
                <div className="flex flex-col">
                  <span className="text-sm font-normal leading-snug text-gray-300">
                    Categoria
                  </span>
                  <span className="text-base leading-snug text-gray-200">
                    Categoria1, Categoria2
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <BookOpen className="h-6 w-6 text-green-100" />
                <div className="flex flex-col">
                  <span className="text-sm font-normal leading-snug text-gray-300">
                    Páginas
                  </span>
                  <span className="text-base leading-snug text-gray-200">
                    160
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 mt-10 flex items-center justify-between">
            <div className="text-sm leading-snug text-gray-200">Avaliações</div>

            <button
              type="button"
              className="text-center text-base font-bold leading-relaxed text-purple-100 hover:text-purple-300"
            >
              Avaliar
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <Review
              rating={3}
              postDate="Há 2 dias"
              userName="Fulano Silva"
              userAvatar="https://via.placeholder.com/40x40"
              review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque natus quisquam sint suscipit repellendus adipisci reiciendis quidem reprehenderit fuga magnam maxime deserunt, sunt culpa debitis doloribus voluptate facere ipsum molestiae?"
            />
            <Review
              rating={3}
              postDate="Há 2 dias"
              userName="Fulano Silva"
              userAvatar="https://via.placeholder.com/40x40"
              review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque natus quisquam sint suscipit repellendus adipisci reiciendis quidem reprehenderit fuga magnam maxime deserunt, sunt culpa debitis doloribus voluptate facere ipsum molestiae?"
            />
            <Review
              rating={3}
              postDate="Há 2 dias"
              userName="Fulano Silva"
              userAvatar="https://via.placeholder.com/40x40"
              review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque natus quisquam sint suscipit repellendus adipisci reiciendis quidem reprehenderit fuga magnam maxime deserunt, sunt culpa debitis doloribus voluptate facere ipsum molestiae?"
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

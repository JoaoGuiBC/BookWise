import type { Metadata } from 'next'
import { User } from '@phosphor-icons/react/dist/ssr'

import { UserDataMenu } from './user-data-menu'
import { LargeCard } from '@/components/book-card'
import { PageTitle } from '@/components/page-title'
import { SearchBar } from '@/components/search-bar'

const examples = [
  {
    book: {
      title: 'Fragmentos do Horror',
      author: 'Junji Ito',
      coverImage: '/book1.png',
    },
    review: {
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis perspiciatis odit qui nisi sapiente unde ratione eos recusandae labore! Nam porro inventore nisi optio ducimus, reiciendis aliquam consequuntur magnam molestiae.',
      date: '2023-12-08T12:20:00.000Z',
      score: 4,
    },
  },
  {
    book: {
      title: 'Solitário',
      author: 'Chabouté',
      coverImage: '/book2.png',
    },
    review: {
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi quod, natus voluptas quis dicta. Quaerat, esse, ipsum soluta beatae eius non sit iste dolor quisquam et molestiae magni totam. Officiis perspiciatis odit qui nisi sapiente unde ratione eos recusandae labore! Nam porro inventore nisi optio ducimus, reiciendis aliquam consequuntur magnam molestiae. Quaerat, esse, ipsum soluta beatae eius non sit iste dolor quisquam et molestiae magni totam. Officiis perspiciatis odit qui nisi sapiente unde ratione eos recusandae labore!',
      date: '2023-12-20T13:20:00.000Z',
      score: 5,
    },
  },
]

export const metadata: Metadata = {
  title: 'Perfil',
}

export default function Page() {
  return (
    <>
      <PageTitle IconTitle={User} title="Perfil" />

      <div className="flex gap-16">
        <main className="flex w-full flex-col gap-8">
          <SearchBar className="w-full" />

          <div>
            <p className="text-sm text-gray-300">Há 2 dias</p>
            <LargeCard book={examples[0].book} review={examples[0].review} />
          </div>
          <div>
            <p className="text-sm text-gray-300">Há 2 dias</p>
            <LargeCard book={examples[1].book} review={examples[1].review} />
          </div>
          <div>
            <p className="text-sm text-gray-300">Há 2 dias</p>
            <LargeCard book={examples[0].book} review={examples[0].review} />
          </div>
          <div>
            <p className="text-sm text-gray-300">Há 2 dias</p>
            <LargeCard book={examples[1].book} review={examples[1].review} />
          </div>
        </main>

        <UserDataMenu />
      </div>
    </>
  )
}

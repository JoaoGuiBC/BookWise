import Link from 'next/link'
import type { Metadata } from 'next'
import { CaretRight, ChartLineUp } from '@phosphor-icons/react/dist/ssr'

import { PageTitle } from '@/components/page-title'
import { LargeCard, SmallCard } from '@/components/book-card'

const examples = [
  {
    critic: {
      name: 'João Guilherme',
      userImage: 'https://github.com/joaoguibc.png',
    },
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
    critic: {
      name: 'João Guilherme',
      userImage: 'https://github.com/joaoguibc.png',
    },
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
  title: 'Início',
}

export default function Page() {
  return (
    <>
      <PageTitle IconTitle={ChartLineUp} title="Início" />

      <div className="flex gap-16">
        <main className="w-full">
          <p className="mb-4 text-sm text-gray-100">Avaliações mais recentes</p>

          <LargeCard
            book={examples[0].book}
            critic={examples[0].critic}
            review={examples[0].review}
          />
          <LargeCard
            book={examples[1].book}
            critic={examples[1].critic}
            review={examples[1].review}
          />
          <LargeCard
            book={examples[0].book}
            critic={examples[0].critic}
            review={examples[0].review}
          />
          <LargeCard
            book={examples[1].book}
            critic={examples[1].critic}
            review={examples[1].review}
          />
        </main>

        <aside className="w-96">
          <div className="mb-4 flex items-center">
            <p className="mr-auto text-sm text-gray-100">Livros populares</p>

            <Link
              href="/"
              className="flex items-center gap-2 px-2 text-sm/6 font-bold text-purple-100 hover:text-purple-300"
            >
              Ver todos <CaretRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-3">
            <SmallCard
              author="Autor"
              title="Título"
              score={4}
              cover="https://via.placeholder.com/64x94"
            />
            <SmallCard
              author="Autor"
              title="Título"
              score={4}
              cover="https://via.placeholder.com/64x94"
            />
            <SmallCard
              author="Autor"
              title="Título"
              score={4}
              cover="https://via.placeholder.com/64x94"
            />
            <SmallCard
              author="Autor"
              title="Título"
              score={4}
              cover="https://via.placeholder.com/64x94"
            />
          </div>
        </aside>
      </div>
    </>
  )
}

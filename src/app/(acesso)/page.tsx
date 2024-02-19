import Link from 'next/link'
import type { Metadata } from 'next'
import { CaretRight, ChartLineUp } from '@phosphor-icons/react/dist/ssr'

import { api } from '@/data/api'
import { dayjs } from '@/lib/dayjs'
import { Review } from '@/data/types/review'

import { PageTitle } from '@/components/page-title'
import { LargeCard, SmallCard } from '@/components/book-card'

async function getAsyncReviews() {
  const response = await api('/review', {
    next: { revalidate: 60 * 60 }, // 1 hour
  })
  const reviews: Review[] = await response.json()

  return reviews.map((review) => ({
    book: review.book,
    id: review.id,
    critic: review.critic,
    review: {
      score: review.review.score,
      date: dayjs(review.review.date).toString(),
    },
  }))
}

export const metadata: Metadata = {
  title: 'Início',
}

export default async function Page() {
  const reviews = await getAsyncReviews()

  return (
    <>
      <PageTitle IconTitle={ChartLineUp} title="Início" />

      <div className="flex gap-16">
        <main className="w-full">
          <p className="mb-4 text-sm text-gray-100">Avaliações mais recentes</p>

          {reviews.map((data) => (
            <LargeCard
              key={data.id}
              book={data.book}
              critic={data.critic}
              review={data.review}
            />
          ))}
        </main>

        <aside className="w-96">
          <div className="mb-4 flex items-center">
            <p className="mr-auto text-sm text-gray-100">Livros populares</p>

            <Link
              href="/explorar"
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

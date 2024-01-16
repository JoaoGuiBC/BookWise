import type { Metadata } from 'next'
import { Binoculars } from '@phosphor-icons/react/dist/ssr'

import { PageTitle } from '@/components/page-title'
import { SearchBar } from '@/components/search-bar'
import { BookTagsBar } from '@/components/book-tags/book-tags-bar'
import { SmallCard } from '@/components/book-card'

export const metadata: Metadata = {
  title: 'Explorar',
}

export default function Page() {
  return (
    <>
      <div className="flex h-fit w-full items-center justify-between gap-4">
        <PageTitle IconTitle={Binoculars} title="Explorar" />
        <SearchBar placeholder="Buscar livro ou autor" />
      </div>

      <BookTagsBar />

      <div className="grid-cols-3 grid gap-5">
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
    </>
  )
}

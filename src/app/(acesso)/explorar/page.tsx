import type { Metadata } from 'next'
import { Binoculars } from '@phosphor-icons/react/dist/ssr'

import { SmallCard } from '@/components/book-card'
import { PageTitle } from '@/components/page-title'
import { SearchBar } from '@/components/search-bar'
import { BookTagsBar } from '@/components/book-tags/book-tags-bar'

export const metadata: Metadata = {
  title: 'Explorar',
}

export default function Page() {
  return (
    <>
      <div className="flex h-fit w-full items-center justify-between gap-4">
        <PageTitle IconTitle={Binoculars} title="Explorar" />
        <SearchBar placeholder="Buscar livro ou autor" className="max-w-sm" />
      </div>

      <BookTagsBar />

      <div className="grid grid-cols-3 gap-5">
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

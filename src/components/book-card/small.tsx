import Image from 'next/image'

import { RatingBar } from '../rating-bar'

interface SmallCardProps {
  title: string
  author: string
  score: number
  cover: string
}

export function SmallCard({ title, author, score, cover }: SmallCardProps) {
  return (
    <div className="flex w-full gap-5 rounded-lg bg-gray-700 px-5 py-4">
      <Image
        src={cover}
        className="rounded"
        width={64}
        height={94}
        alt={`${title} cover`}
      />
      <div className="flex flex-1 flex-col">
        <h1 className="line-clamp-2 font-bold">{title}</h1>
        <p className="text-sm/6 text-gray-400">{author}</p>

        <RatingBar className="mt-auto" score={score} />
      </div>
    </div>
  )
}

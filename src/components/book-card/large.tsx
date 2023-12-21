import Image from 'next/image'

import { dayjs } from '@/lib/dayjs'

import { Avatar } from '../avatar'
import { TextClamp } from '../text-clamp'
import { RatingBar } from '../rating-bar'

interface CriticData {
  name: string
  userImage: string
}

interface BookData {
  title: string
  author: string
  coverImage: string
}

interface ReviewData {
  date: string
  score: number
  review: string
}

interface LargeCardProps {
  book: BookData
  critic: CriticData
  review: ReviewData
}

export function LargeCard({ book, critic, review }: LargeCardProps) {
  const reviewDate = dayjs().subtract(3, 'hour').from(dayjs(review.date), true)

  return (
    <div className="mb-3 rounded-lg bg-gray-700 p-6">
      <div className="mb-8 flex items-center">
        <Avatar source={critic.userImage} size={40} />

        <div>
          <p className="leading-relaxed">{critic.name}</p>
          <p className="text-sm leading-snug text-gray-400">Há {reviewDate}</p>
        </div>

        <RatingBar className="ml-auto" score={review.score} />
      </div>

      <div className="inline-flex h-full items-start justify-start gap-5">
        <Image
          className="h-[9.5rem] w-[6.75rem] rounded"
          src={book.coverImage}
          width={108}
          height={152}
          quality={100}
          alt={`Capa de ${book.title}`}
        />
        <div>
          <h1 className="text-base font-bold leading-snug">{book.title}</h1>
          <span className="text-sm font-normal leading-snug text-gray-400">
            {book.author}
          </span>

          <TextClamp>{review.review}</TextClamp>
        </div>
      </div>
    </div>
  )
}

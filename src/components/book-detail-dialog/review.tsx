import { Avatar } from '../avatar'
import { RatingBar } from '../rating-bar'

interface ReviewProps {
  rating: number
  review: string
  userName: string
  postDate: string
  userAvatar: string
}

export function Review({
  rating,
  review,
  userName,
  postDate,
  userAvatar,
}: ReviewProps) {
  return (
    <div className="flex flex-col gap-5 rounded-lg bg-gray-700 p-6">
      <div className="flex w-full items-start gap-4">
        <Avatar size={40} source={userAvatar} />

        <div className="flex flex-1 flex-col">
          <span className="text-base leading-snug text-gray-200">
            {userName}
          </span>
          <span className="text-sm font-normal leading-snug text-gray-300">
            {postDate}
          </span>
        </div>

        <RatingBar score={rating} />
      </div>

      <span className="text-sm leading-snug text-gray-300">{review}</span>
    </div>
  )
}

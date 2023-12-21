import { ComponentProps } from 'react'
import { Star } from '@phosphor-icons/react/dist/ssr'

interface RatingBarProps extends ComponentProps<'div'> {
  score: number
}

export function RatingBar({ score, className, ...props }: RatingBarProps) {
  return (
    <div className={`flex items-center gap-1 ${className}`} {...props}>
      <Star
        className="h-4 w-4 text-purple-100"
        weight={score === 0 ? 'regular' : 'fill'}
      />
      <Star
        className="h-4 w-4 text-purple-100"
        weight={score > 1 ? 'fill' : 'regular'}
      />
      <Star
        className="h-4 w-4 text-purple-100"
        weight={score > 2 ? 'fill' : 'regular'}
      />
      <Star
        className="h-4 w-4 text-purple-100"
        weight={score > 3 ? 'fill' : 'regular'}
      />
      <Star
        className="h-4 w-4 text-purple-100"
        weight={score > 4 ? 'fill' : 'regular'}
      />
    </div>
  )
}

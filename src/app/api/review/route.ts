import { prisma } from '@/lib/prisma'
import { Review } from '@/data/types/review'

export async function GET() {
  const rawReviews = await prisma.review.findMany({
    orderBy: { createdAt: 'desc' },
    take: 20,
    select: {
      id: true,
      author: true,
      title: true,
      score: true,
      coverImage: true,
      synopsis: true,
      updatedAt: true,
      critic: {
        select: { name: true, avatar: true },
      },
    },
  })

  const formattedReviews: Review[] = rawReviews.map((review) => {
    return {
      id: review.id,
      book: {
        title: review.title,
        author: review.author,
        synopsis: review.synopsis,
        coverImage: review.coverImage,
      },
      review: {
        date: review.updatedAt,
        score: review.score,
      },
      critic: {
        name: review.critic.name,
        userImage: review.critic.avatar,
      },
    }
  })

  return Response.json(formattedReviews)
}

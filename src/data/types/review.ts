export interface Review {
  id: number
  book: {
    title: string
    author: string
    synopsis: string
    coverImage: string
  }
  review: {
    date: Date
    score: number
  }
  critic: {
    name: string
    userImage: string
  }
}

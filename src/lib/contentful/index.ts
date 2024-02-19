import { createClient } from 'contentful'

import { env } from '@/env'

export const contentful = createClient({
  accessToken: env.CONTENTFUL_ACCESS_TOKEN,
  space: env.CONTENTFUL_SPACE_ID,
})

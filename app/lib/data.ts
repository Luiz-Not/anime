import { request } from './fetch'

const PER_PAGE = 12

interface AnimeListData {
  Page: {
    media: {
      id: number
      title: { english: string, romaji: string }
      averageScore: number
      genres: string[]
      coverImage: {
        extraLarge: string
      }
    }[]
    pageInfo: {
      hasNextPage: boolean
    }
  }
}

export const getAnimeList = async (page = 1, format?: string, search?: string): Promise<AnimeListData> => {
  await new Promise((resolve) => setTimeout(() => resolve(true), 1000))
  const query = `
    query ($page: Int, $perPage: Int, $format: MediaFormat, $search: String) {
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          hasNextPage
        }
        media (type: ANIME, format: $format, search: $search) {
          id
          title {
            english
            native
            romaji
          }
          coverImage {
            extraLarge
            large
          }
          genres
          averageScore
        }
      }
    }
  `
  const variables = {
    page,
    perPage: PER_PAGE,
    format,
    search
  }
  return await request(query, variables)
}

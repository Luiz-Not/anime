import { request } from './fetch'
import { AnimeListData } from './types'

const PER_PAGE = 12

export const getAnimeList = async (page = 1, format?: string, search?: string): Promise<AnimeListData> => {
  // Criando um delay de 1s para visualizar os loadings
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

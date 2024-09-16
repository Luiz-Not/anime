export interface AnimeListData {
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
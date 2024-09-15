'use server'

export const request = async (
  query: string,
  variables: object
) => {
  const request = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({
        query: query,
        variables: variables
    })
  })

  const responseText = await request.text()

  const response = responseText === '' ? {} : JSON.parse(responseText)

  console.log(response)

  if (!request.ok) {
    throw new Error(response.message)
  }

  return response.data
}

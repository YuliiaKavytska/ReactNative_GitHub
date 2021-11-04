import { ApolloClient, InMemoryCache } from '@apollo/client'
import { HttpLink } from 'apollo-link-http'
import {GITHUB_ACCESS_TOKEN} from '@env'

export const createApolloClient = () => {
  const link = new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`
    }
  })

  const cache = new InMemoryCache()

  const client = new ApolloClient({
    cache,
    link
  });

  return client
}
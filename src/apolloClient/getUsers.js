import { gql } from '@apollo/client'

export const GET_USERS = gql(`
  query getUsers($searchText: String!, $after: String) {
    search(type: USER, query: $searchText, first: 10, after: $after) {
      userCount
      nodes {
        ... on User {
          id
          avatarUrl
          login
          name
          bio,
          url
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`)
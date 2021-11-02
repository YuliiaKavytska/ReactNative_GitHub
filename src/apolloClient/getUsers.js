import { gql } from '@apollo/client'

export const GET_USERS = gql(`
  query getUsers($searchText: String!) {
    search(type: USER, query: $searchText, first: 10) {
      userCount
      nodes {
        ... on User {
          id
          avatarUrl
          login
          name
          bio
        }
      }
    }
  }
`)
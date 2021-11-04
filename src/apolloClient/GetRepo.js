import {USERNAME} from '@env';
import { gql } from '@apollo/client'

export const GET_REPO = gql(`
  query getRepos {
    user(login: "${USERNAME}") {
      repositories(last: 10) {
        totalCount
        nodes {
          id
          name
          primaryLanguage {
            name
          }
          url
        }
      }
    }
  }
`)
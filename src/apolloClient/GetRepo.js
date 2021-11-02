import {USERNAME} from '@env';
import { gql } from '@apollo/client'

export const GET_REPO = gql(`
  query MyQuery {
    user(login: "${USERNAME}") {
      repositories(last: 10) {
        totalCount
        nodes {
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
import {USERNAME} from '@env';
import { gql } from '@apollo/client'

export const GET_ME = gql(`
  query GetMe {
    user(login: "${USERNAME}") {
      bio
      avatarUrl
      email
      login
      name
      url
      repositories {
        totalCount
      }
    }
  }
`)
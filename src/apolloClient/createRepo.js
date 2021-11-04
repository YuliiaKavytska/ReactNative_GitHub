import { gql } from '@apollo/client'

export const CREATE_REPO = gql(`
  mutation CreateRepo($name: String!, $visibility: String!, $description: String) {
    createRepository(input: {name: $name, visibility: $visibility, description: $description}) {
      repository {
        name
        url
      }
    }
  }
`)
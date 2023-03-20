import { gql } from 'graphql-tag';

export const GET_ROCKETS_QUERY = gql`
  query ExampleQuery {
  rockets {
    id
    description
    name
  }
}
`;

import {gql} from "@apollo/client";

const getProductsQuery = gql`
    query {
  category {
    name,
    products{
    \tid,
      name,
      prices{
        amount,
        currency{
          label,
          symbol
        }
      },
      gallery
    }
  }
}
`;

const getProductsById = gql`
query productQuery($id: ID) {
  product(id: $id) {
    id
    name
    gallery
  }
}
`;

export {getProductsQuery, getProductsById}
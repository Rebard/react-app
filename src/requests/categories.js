import { gql } from '@apollo/client';
import { Fragments } from './fragments';

export const getAllCategories = gql(`
  query allCategories($maxLevel: Float) {
    allCategories(maxLevel: $maxLevel) {
      edges {
        node {
          id
          slug
          name
          level
        }
      }
    }
  }
`);

export const getCategory = gql`
  query getCategory($id: String, $slug: String) {
    category(id: $id, slug: $slug) {
      ...CategoryNode      
    }
  }
  ${Fragments.CategoryNode}
`;


import { gql } from '@apollo/client';

export const Fragments = {
  CategoryNode: gql`
    fragment CategoryNode on CategoryNode {
      id
      slug
      name
      size
      headerPicture
      offerPicture
    }
  `,
  FaqNode: gql`
    fragment FaqNode on FaqNode {
      id
      question
      answer
      faqType
      category {
        id
        name
      }
    }
  `,
};
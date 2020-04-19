import { gql } from '@apollo/client';
import { Fragments } from './fragments';

export const getFaq = gql`
  query allFaq($faqType: String, $category: String, $includeTree: Boolean) {
    allFaq(faqType: $faqType, category: $category, includeTree: $includeTree) {
      edges {
        node {
          ...FaqNode
        }
      }
    }
  }
  ${Fragments.FaqNode}
`;
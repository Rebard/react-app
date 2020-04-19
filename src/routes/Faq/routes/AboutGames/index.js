import React, { memo } from 'react';
import { useQuery } from '@apollo/client';
import { Spin } from 'antd';
import { getFaq } from 'requests/faq';
import FaqList from 'components/FaqList';
import Title from 'components/Title';

const AboutGames = ({ match, games }) => {
  const { loading, data } = useQuery(getFaq, {
    variables: {
      category: match.params.id,
      includeTree: true,
      faqType: 'CATEGORY'
    }
  });
  if (loading) return <Spin tip="Loading" />;

  const faq = data.allFaq.edges.map(item => item.node);
  const { name = '' } = games.find(item => item.id === match.params.id) || {};

  return (
    <div>
      <Title title={`ABOUT GAME ${name.toUpperCase()}`} />
      <FaqList list={faq}/>
    </div>
  );
};

export default memo(AboutGames);
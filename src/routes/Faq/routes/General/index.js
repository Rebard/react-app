import React, { memo } from 'react';
import { useQuery } from '@apollo/client';
import { Spin } from 'antd';
import { getFaq } from 'requests/faq';
import FaqList from 'components/FaqList';
import Title from 'components/Title';

const General = () => {
  const { loading, data } = useQuery(getFaq, {
    variables: {
      includeTree: true,
      faqType: 'GENERAL'
    }
  });
  if (loading) return <Spin tip="Loading" />;
  const faq = data.allFaq.edges.map(item => item.node);

  return (
    <div>
      <Title title="GENERAL" />
      <FaqList list={faq}/>
    </div>
  );
};

export default memo(General);
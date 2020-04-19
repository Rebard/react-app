import React, { memo }  from 'react';
import { useQuery } from '@apollo/client';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import { getAllCategories } from 'requests/categories';
import Menu from 'components/Menu';
import General from './routes/General';
import AboutGames from './routes/AboutGames';
import Boosters from './routes/ForBoosters';
import styles from './styles.module.css';

const Faq = ({ match }) => {
  const { loading, data } = useQuery(getAllCategories, { 
    variables: { maxLevel: 0 }
  });

  if (loading) return <Spin tip="Loading" />;

  const games = data.allCategories.edges.map(item => ({
    id: item.node.id,
    name: item.node.name,
    link: `${match.url}/games/${item.node.id}`,
  }));

  const menu = [
    { name: 'General', children: [], link: `${match.url}/general` },
    { name: 'About Games', children: games },
    { name: 'For Boosters', children: [], link: `${match.url}/boosters` },
  ];

  return (
    <Layout className={styles.wrapper}>
      <Layout.Sider width={200}>
        <Menu
          menu={menu}
          defaultOpenKeys={[menu[0].name]}
        />
      </Layout.Sider>
      <Layout.Content className={styles.content}>
        <Switch>
          <Route exact path={`${match.url}/general`} component={General}/>
          <Route exact path={`${match.url}/games/:id`} render={props => <AboutGames {...props} games={games}/>}/>
          <Route exct path={`${match.url}/boosters`} component={Boosters} />
          <Redirect to={`${match.url}/general`} />
        </Switch>
      </Layout.Content>
    </Layout>
  );
}

export default memo(Faq);

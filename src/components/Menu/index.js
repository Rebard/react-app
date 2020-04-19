import React, { memo, useCallback } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import styles from './styles.module.css';

const { SubMenu, Item } = Menu;

const CustomMenu = ({ menu, defaultSelectedKeys, defaultOpenKeys }) => {
  const history = useHistory();
  const handleClickByLink = useCallback(link => {
    if (!link) return;
    history.push(link);
  }, [history]);

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
    >
      {menu.map(item => (
        <SubMenu
          key={item.name}
          title={item.name}
          onTitleClick={() => handleClickByLink(item.link)}
        >
          {item.children.map(child => (
            <Item key={child.id}>
              <NavLink
                to={child.link}
                className={styles.link}
                activeClassName={styles.active}
              >
                {child.name}
              </NavLink>
            </Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};

CustomMenu.defaultProps = {
  defaultSelectedKeys: [],
  defaultOpenKeys: [],
  menu: [],
};

export default memo(CustomMenu);
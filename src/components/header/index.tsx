
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import './index.scss'

const items: MenuProps['items'] = [
  {
    label: '首页',
    key: 'home-page',
  },
  {
    label: '故事内容',
    key: 'story-content',
  },
  {
    label: '登场角色',
    key: 'debut-role',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: '关联作品',
    key: 'related-works',
  },
];

const Header: React.FC = () => {
  const [current, setCurrent] = useState('home-page');

  const onClick: MenuProps['onClick'] = e => {
    setCurrent(e.key);
  };

  return <div className={'sao-header'}>
        <div className={'navbar-container'}>
            <div className={'navbar-header'}>
                <img src="./img/logo.png" alt="" />
            </div>
            <div className={'sao-header-navbar'}>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </div>
        </div>
    </div>;
};

export default Header;
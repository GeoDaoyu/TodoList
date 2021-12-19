import { List, Avatar } from 'antd';
import { Link } from 'umi';

interface ListItem {
  avatar: string;
  to: string;
  title: string;
  description: string;
}

export default () => {
  const dataSource: ListItem[] = [
    {
      title: 'jQuery',
      avatar: 'https://api.jquery.com/favicon.ico',
      to: '/jQuery',
      description: 'jQuery is a fast, small, and feature-rich JavaScript library.',
    },
    {
      title: 'Ramda',
      avatar: 'https://ramda.cn/favicon.ico',
      to: '/Ramda',
      description: '一款实用的 JavaScript 函数式编程库。',
    },
    {
      title: 'DvaJS',
      avatar: 'https://zos.alipayobjects.com/rmsportal/psagSCVHOKQVqqNjjMdf.jpg',
      to: '/DvaJS',
      description:
        'dva 首先是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架。',
    },
    {
      title: 'Redux Toolkit',
      avatar: 'https://redux-toolkit.js.org/img/favicon/favicon.ico',
      to: '/RTK',
      description:
        'The official, opinionated, batteries-included toolset for efficient Redux development',
    },
    {
      title: 'ahooks',
      avatar: 'https://ahooks.js.org/simple-logo.svg',
      to: '/ahooks',
      description: 'A high-quality & reliable React Hooks library',
    },
    {
      title: 'rxjs',
      avatar: 'https://rxjs-dev.firebaseapp.com/assets/images/favicons/favicon.ico',
      to: '/rxjs',
      description: 'Reactive Extensions Library for JavaScript',
    },
  ];
  return (
    <List
      itemLayout="horizontal"
      dataSource={dataSource}
      renderItem={({ avatar, to, title, description }: ListItem) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={avatar} />}
            title={<Link to={to}>{title}</Link>}
            description={description}
          />
        </List.Item>
      )}
    />
  );
};

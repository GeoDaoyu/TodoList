import { useState, useEffect } from 'react';
import { request } from 'umi';

export default () => {
  const [dataSource, setDataSource] = useState([]);
  const [action, setAction] = useState(0);
  const refresh = () => setAction((state) => state + 1);

  useEffect(() => {
    request('/api/todos').then(({ data }) => {
      setDataSource(data);
    });
  }, [action]);
  return {
    dataSource,
    refresh,
  };
};

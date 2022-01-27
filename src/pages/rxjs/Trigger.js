import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { modalVisit$, type$, initialValues$ } from './store';

export default () => {
  const onAdd = () => {
    modalVisit$.next(true);
    type$.next('add');
    initialValues$.next({});
  };
  return (
    <Button type="primary" shape="circle" onClick={onAdd}>
      <PlusOutlined />
    </Button>
  );
};

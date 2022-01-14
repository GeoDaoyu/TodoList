import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useModel } from 'umi';

export default () => {
  const { onAdd } = useModel('useModalFormModel', (model) => ({
    onAdd: model.onAdd,
  }));
  const onClick = onAdd;
  return (
    <Button type="primary" shape="circle" onClick={onClick}>
      <PlusOutlined />
    </Button>
  );
};

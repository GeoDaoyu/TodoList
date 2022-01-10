import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default ({ onAdd }) => {
  return (
    <Button type="primary" shape="circle" onClick={onAdd}>
      <PlusOutlined />
    </Button>
  );
};

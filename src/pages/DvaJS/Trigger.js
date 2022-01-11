import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { connect } from 'umi';

const Trigger = ({ dispatch }) => {
  const onClick = () => {
    dispatch({
      type: 'todoList/onAdd',
    });
  };
  return (
    <Button type="primary" shape="circle" onClick={onClick}>
      <PlusOutlined />
    </Button>
  );
};

export default connect()(Trigger);

import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

const Trigger = ({ dispatch }) => {
  const onClick = () => {
    dispatch({
      type: 'modalForm/onAdd',
    });
  };
  return (
    <Button type="primary" shape="circle" onClick={onClick}>
      <PlusOutlined />
    </Button>
  );
};

export default connect()(Trigger);

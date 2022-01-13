import { Typography, Checkbox, message } from 'antd';
import { connect } from 'umi';
import { removeTodo } from './service';
import { query } from './todoListSlice';

const { Text } = Typography;

const ListItem = ({ info, dispatch }) => {
  const { id, text } = info;
  const onClick = () => {
    dispatch({
      type: 'modalForm/onEdit',
      payload: info,
    });
  };
  const onChange = async () => {
    await removeTodo({ id });
    await dispatch(query());
    message.success('已完成');
  };
  return (
    <li key={id} className="flex justify-between">
      <Text onClick={onClick} className="cursor-pointer">
        {text}
      </Text>
      <Checkbox onChange={onChange} />
    </li>
  );
};

export default connect()(ListItem);

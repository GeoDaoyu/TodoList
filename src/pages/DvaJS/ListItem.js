import { Typography, Checkbox, message } from 'antd';
import { connect } from 'umi';
const { Text } = Typography;

const ListItem = ({ info, onEdit, dispatch }) => {
  const { id, text } = info;
  const onClick = () => {
    onEdit({
      id,
      text,
    });
  };
  const onChange = async () => {
    await dispatch({
      type: 'todoList/removeTodo',
      payload: { id },
    });
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

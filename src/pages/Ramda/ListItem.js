import { Typography, Checkbox, message } from 'antd';
import { request } from 'umi';
const { Text } = Typography;

export default ({ info, onEdit, callback }) => {
  const { id, text } = info;
  const onClick = () => {
    onEdit({
      id,
      text,
    });
  };
  const onChange = async () => {
    await request(`/api/todo/${id}`, { method: 'DELETE' });
    message.success('已完成');
    callback();
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

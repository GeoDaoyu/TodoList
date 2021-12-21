import { Typography, Checkbox } from 'antd';
const { Text } = Typography;

export default ({ info, onDelete, onEdit }) => {
  const { id, text } = info;
  const onClick = () => {
    onEdit({
      id,
      text,
    });
  };
  const onChange = () => {
    onDelete({ id });
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

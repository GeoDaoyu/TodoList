import { Typography, Checkbox, message } from 'antd';
import { request, useModel } from 'umi';

const { Text } = Typography;

export default ({ info }) => {
  const { onEdit } = useModel('useModalFormModel', (model) => ({
    onEdit: model.onEdit,
  }));
  const { refresh } = useModel('useTodoListModel', (model) => ({ refresh: model.refresh }));

  const { id, text } = info;
  const onClick = () => {
    onEdit(info);
  };
  const onChange = async () => {
    await request(`/api/todo/${id}`, { method: 'DELETE' });
    message.success('已完成');
    refresh();
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

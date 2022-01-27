import { Typography, Checkbox, message } from 'antd';
import { request } from 'umi';
import { modalVisit$, type$, initialValues$, doQuery } from './store';

const { Text } = Typography;

export default ({ info }) => {
  const { id, text } = info;
  const onClick = () => {
    modalVisit$.next(true);
    type$.next('edit');
    initialValues$.next({
      id,
      text,
    });
  };
  const onChange = async () => {
    await request(`/api/todo/${id}`, { method: 'DELETE' });
    message.success('已完成');
    doQuery();
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

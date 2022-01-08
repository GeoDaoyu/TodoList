import { message } from 'antd';
import { ModalForm, ProFormTextArea } from '@ant-design/pro-form';
import { request } from 'umi';

export default ({ visible, type = 'add', initialValues = {}, setVisible, callback }) => {
  const label = type === 'add' ? '新建' : '更新';
  const onFinish = async (values) => {
    if (type === 'add') {
      await request('/api/todo', { method: 'POST', data: values });
    } else {
      const id = initialValues?.id;
      await request(`/api/todo/${id}`, { method: 'PUT', data: values });
    }
    message.success(`${label}完成`);
    callback();
    return true;
  };
  return (
    <ModalForm
      title={`${label}待办`}
      visible={visible}
      onVisibleChange={setVisible}
      modalProps={{
        destroyOnClose: true,
      }}
      initialValues={initialValues}
      onFinish={onFinish}
    >
      <ProFormTextArea rows={4} name="text" />
    </ModalForm>
  );
};

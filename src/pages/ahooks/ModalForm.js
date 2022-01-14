import { message } from 'antd';
import { ModalForm, ProFormTextArea } from '@ant-design/pro-form';
import { request, useModel } from 'umi';

export default () => {
  const { modalVisit, type, initialValues, setModalVisit } = useModel('useModalFormModel');
  const { refresh } = useModel('useTodoListModel', (model) => ({ refresh: model.refresh }));
  const label = type === 'add' ? '新建' : '更新';
  const onFinish = async (values) => {
    if (type === 'add') {
      await request('/api/todo', { method: 'POST', data: values });
    } else {
      const id = initialValues?.id;
      await request(`/api/todo/${id}`, { method: 'PUT', data: values });
    }
    refresh();
    message.success(`${label}完成`);
    return true;
  };
  return (
    <ModalForm
      title={`${label}待办`}
      visible={modalVisit}
      onVisibleChange={setModalVisit}
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

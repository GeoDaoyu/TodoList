import { message } from 'antd';
import { ModalForm, ProFormTextArea } from '@ant-design/pro-form';
import { request } from 'umi';
import { initialValues$, type$, modalVisit$, doQuery } from './store';
import { useObservableState } from 'observable-hooks';

export default () => {
  const visible = useObservableState(modalVisit$, false);
  const initialValues = useObservableState(initialValues$, {});
  const type = useObservableState(type$, 'add');
  const label = type === 'add' ? '新建' : '更新';
  const onFinish = async (values) => {
    if (type === 'add') {
      await request('/api/todo', { method: 'POST', data: values });
    } else {
      const id = initialValues?.id;
      await request(`/api/todo/${id}`, { method: 'PUT', data: values });
    }
    message.success(`${label}完成`);
    doQuery();
    return true;
  };
  return (
    <ModalForm
      title={`${label}待办`}
      visible={visible}
      onVisibleChange={(val) => modalVisit$.next(val)}
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

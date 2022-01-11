import { message } from 'antd';
import { ModalForm, ProFormTextArea } from '@ant-design/pro-form';
import { connect } from 'umi';

const TodoModalForm = ({ visible, initialValues, type, dispatch }) => {
  const label = type === 'add' ? '新建' : '更新';
  const onFinish = async (values) => {
    if (type === 'add') {
      await dispatch({
        type: 'todoList/addTodo',
        payload: { data: values },
      });
    } else {
      const id = initialValues?.id;
      await dispatch({
        type: 'todoList/updateTodo',
        payload: { id, data: values },
      });
    }
    message.success(`${label}完成`);
    return true;
  };
  const setVisible = (val) =>
    dispatch({
      type: 'todoList/setModalVisit',
      payload: val,
    });
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

export default connect(({ todoList }) => ({
  visible: todoList.modalVisit,
  initialValues: todoList.currentTodo,
  type: todoList.modalType,
}))(TodoModalForm);

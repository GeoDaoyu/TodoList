import { message } from 'antd';
import { ModalForm, ProFormTextArea } from '@ant-design/pro-form';
import { connect } from 'react-redux';
import { query } from './todoListSlice';
import { addTodo, updateTodo } from './service';

const TodoModalForm = ({ visible, initialValues, type, dispatch }) => {
  const label = type === 'add' ? '新建' : '更新';
  const onFinish = async (values) => {
    if (type === 'add') {
      await addTodo({ data: values });
    } else {
      const id = initialValues?.id;
      await updateTodo({ id, data: values });
    }
    await dispatch(query());
    message.success(`${label}完成`);
    return true;
  };
  const setVisible = (val) =>
    dispatch({
      type: 'modalForm/setModalVisit',
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

export default connect(({ modalForm }) => ({
  visible: modalForm.modalVisit,
  initialValues: modalForm.currentTodo,
  type: modalForm.modalType,
}))(TodoModalForm);

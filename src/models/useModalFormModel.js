import { useState } from 'react';

export default () => {
  const [modalVisit, setModalVisit] = useState(false);
  const [type, setType] = useState('add'); // ['add', 'edit']
  const [initialValues, setInitialValues] = useState({});
  const onAdd = () => {
    setType('add');
    setInitialValues({});
    setModalVisit(true);
  };
  const onEdit = (values) => {
    setType('edit');
    setInitialValues(values);
    setModalVisit(true);
  };

  return {
    modalVisit,
    type,
    initialValues,
    onAdd,
    onEdit,
    setModalVisit,
  };
};

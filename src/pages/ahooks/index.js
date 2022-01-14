import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import Trigger from './Trigger';
import ModalForm from './ModalForm';
import { map } from 'ramda';
import { useModel } from 'umi';

export default () => {
  const { dataSource } = useModel('useTodoListModel', (model) => ({
    dataSource: model.dataSource,
  }));
  return (
    <Container>
      <List>{map((item) => <ListItem key={item.id} info={item} />)(dataSource)}</List>
      <Trigger />
      <ModalForm />
    </Container>
  );
};

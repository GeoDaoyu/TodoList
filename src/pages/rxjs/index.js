import Container from './Container';
import List from './List';
import ListItem from './ListItem';
import Trigger from './Trigger';
import ModalForm from './ModalForm';
import { map } from 'ramda';
import { dataSource$ } from './store';
import { useObservableState } from 'observable-hooks';

export default () => {
  const dataSource = useObservableState(dataSource$, []);

  return (
    <Container>
      <List>{map((item) => <ListItem key={item.id} info={item} />)(dataSource)}</List>
      <Trigger />
      <ModalForm />
    </Container>
  );
};

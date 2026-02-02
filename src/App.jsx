import { useSelector } from 'react-redux';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import TodoList from './components/TodoList/TodoList';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import EditForm from './components/EditForm/EditForm';

export const App = () => {
  const isEdit = useSelector(state => state.todos.currentTodo);
  const todos = useSelector(state => state.todos.items);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {todos.length === 0 && (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
          {!isEdit ? <Form /> : <EditForm />};
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};

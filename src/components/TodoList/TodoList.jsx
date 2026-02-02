import Text from '../Text/Text';
import Todo from '../Todo/Todo';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const items = useSelector(state => state.todos.items);
  const filterTodoName = useSelector(state => state.filters.name);
  const visibleTodos = items.filter(item =>
    item.text.toLowerCase().includes(filterTodoName.toLowerCase()),
  );
  return (
    <>
      {items.length === 0 && (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
      <ul>
        {visibleTodos.map(({ id, text }, idx) => (
          <Todo key={id} id={id} text={text} count={idx + 1} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;

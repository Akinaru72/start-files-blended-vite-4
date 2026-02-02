import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import Text from '../Text/Text';
import GridItem from '../GridItem/GridItem';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, setCurrentTodo } from '../../redux/todosSlice';

export default function Todo({ id, text, count }) {
  const dispatch = useDispatch();
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = () => {
    dispatch(setCurrentTodo({ id, text }));
  };
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {count}
        </Text>

        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          onClick={handleDeleteTodo}
          type="button"
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          className={style.editButton}
          type="button"
          onClick={handleEditTodo}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
}

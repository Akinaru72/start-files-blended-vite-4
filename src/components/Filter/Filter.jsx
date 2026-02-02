import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import style from './Filter.module.css';

export default function Filter() {
  const items = useSelector(state => state.todos.items);
  const dispatch = useDispatch();
  const handleFilterTodo = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <>
      {items.length > 0 && (
        <input
          className={style.input}
          placeholder="Find it"
          name="filter"
          onChange={handleFilterTodo}
        />
      )}
    </>
  );
}

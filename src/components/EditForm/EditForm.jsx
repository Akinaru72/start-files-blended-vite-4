import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, setCurrentTodo } from '../../redux/todosSlice';
import style from './EditForm.module.css';

const EditForm = () => {
  const currentTodo = useSelector(state => state.todos.currentTodo);
  const dispatch = useDispatch();

  const handleCansel = () => {
    dispatch(setCurrentTodo(null));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const value = form.elements.text.value;
    const id = currentTodo.id;
    dispatch(editTodo({ id, text: value }));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button onClick={handleCansel} className={style.editButton} type="button">
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;

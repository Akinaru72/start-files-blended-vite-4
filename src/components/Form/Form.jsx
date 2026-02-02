import { FiSearch } from 'react-icons/fi';
import { Formik, Form as FormikForm, Field } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todosSlice';

import style from './Form.module.css';

export default function Form() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    if (!values.search.trim()) {
      return;
    }

    const newTodo = { id: nanoid(), text: values.search };
    dispatch(addTodo(newTodo));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        search: '',
      }}
      onSubmit={handleSubmit}
    >
      <FormikForm className={style.form}>
        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>

        <Field
          className={style.input}
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
        />
      </FormikForm>
    </Formik>
  );
}

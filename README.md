# React Blended 4

## 1. Todos

- todos.items — list of all todos
- supports:
  - adding a todo
  - deleting a todo
  - editing a todo

---

## 2. Filter

- `filter` — search string
- used to filter the todo list

---

## 3. Editing

- `todos.currentTodo` — the todo that is currently being edited

Logic:

- when the **Edit** button is clicked, the selected todo is saved to
  `currentTodo`
- if `currentTodo !== null`, the edit form is shown
- if `currentTodo === null`, the add form is shown

---

## 4. Edit form

- the input is pre-filled with the text of the current todo
- **Save** button:
  - updates the todo in `items`
  - sets `currentTodo` to `null`
- **Cancel** button:
  - sets `currentTodo` to `null`

---

## Main idea

- `items` — all todos
- `currentTodo` — the todo being edited
- `filter` — filter for the list

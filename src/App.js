import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
} from "./actions/todoActions";
import "./styles.css";

// Get todo from Redux store
const App = () => {
  const todos = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleAddTodo = (event) => {
    event.preventDefault();
    const content = event.target.todo.value;
    dispatch(addTodo(content)); // dispatch addTodo action with the content of the new todo
    event.target.todo.value = ""; // Clear the input field
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  }; // dispatch deleteTodo action with the id of the todo to be deleted

  const handleEditTodo = (id, content) => {
    const newContent = prompt("Enter the new content:", content);
    if (newContent) {
      dispatch(editTodo(id, newContent));
    } // dispatch editTodo action with the id and new content of the todo
  };

  const handleCompleteTodo = (id) => {
    dispatch(completeTodo(id));
  }; // dispatch completeTodo action with the id of the todo to be marked as completed

  // Form with to do input and buttons
  return (
    <div>
      <h1>To-Do</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todo" placeholder="Add a to-do" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {Object.keys(todos).map((id) => (
          <li key={id}>
            {todos[id].content}
            {!todos[id].completed && (
              <>
                <button onClick={() => handleEditTodo(id, todos[id].content)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteTodo(id)}>Delete</button>
                <button onClick={() => handleCompleteTodo(id)}>Complete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

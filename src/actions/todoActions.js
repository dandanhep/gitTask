export const addTodo = (content) => {
  return {
    type: "ADD_TODO", // Action for adding a new todo
    payload: content, // Data payload: the content of the to do
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO", // Action for deleting a todo
    payload: id, // Data payload: the id of the to do to be deleted
  };
};

export const editTodo = (id, content) => {
  return {
    type: "EDIT_TODO", // Action for editing a todo
    payload: { id, content }, // Data payload: the id & new content of the to do
  };
};

export const completeTodo = (id) => {
  return {
    type: "COMPLETE_TODO", // Action for marking a todo as complete
    payload: id, // Data payload: the id of the to do to be marked completed
  };
};

const initialTodoState = {
  nextId: 2, // The ID to be assigned to the next todo item
  data: {
    1: { content: "Content 1", completed: false }, // Initial todo item with id 1
  },
};

const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newId = state.nextId; // Get the id for the new todo item
      const newTodo = {
        content: action.payload, // Get the content of the new todo from the action payload
        completed: false, // Set completed status to false for the new todo
      };
      return {
        nextId: newId + 1, // Increment the nextId for the next todo item
        data: {
          ...state.data,
          [newId]: newTodo, // Add the new todo item to the data object using its ID as the key
        },
      };

    case "DELETE_TODO":
      const { [action.payload]: deletedTodo, ...rest } = state.data; // todo item to be deleted from the data object
      return {
        ...state,
        data: rest, // Remove the deleted todo item from the data object
      };

    case "EDIT_TODO":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            content: action.payload.content, // Update the content of the specified todo item
          },
        },
      };

    case "COMPLETE_TODO":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload]: {
            ...state.data[action.payload],
            completed: true,
          }, // Mark the specified todo item as completed
        },
      };

    default:
      return state;
  }
};

export default todoReducer;

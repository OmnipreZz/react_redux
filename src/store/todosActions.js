

export const toggleTodoAction = (todo) => ({
  type: 'UPDATE_TODO_ACTION',
  payload: {...todo, completed: !todo.completed}
})
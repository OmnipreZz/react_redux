import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelector } from '../store/todosSelectors';
import { toggleTodoAction, deleteTodoAction } from '../store/todosActions';

function TodoItem({todo, onToggle, onDelete}) {
  return <li>
    <label>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)}/>
      {todo.title}
      <button onClick={() => onDelete(todo)}>x</button>
    </label>
  </li>
}

export function TodoList({todos, onToggle, onDelete}) {
  return <ul>
    {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} key={todo.id} onDelete={onDelete}/>)}
  </ul>
}

export function TodoListStore() {
  const todos = useSelector(todosSelector)
  const dispatch = useDispatch()
  const onToggle = useCallback(todo => {
    dispatch(toggleTodoAction(todo))
  }, [])
  const onDelete = useCallback(todo => {
    dispatch(deleteTodoAction(todo))
  }, [])
  return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
}

/** 
export const TodoListStore = connect(
  (state) => ({
    todos: todosSelector(state)
  }),
  (dispatch) => ({
    onToggle: todo => dispatch(toggleTodoAction(todo))
  })
)(TodoList)
*/
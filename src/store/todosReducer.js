
let id = 5;

const initialState = [
  {
    id: 1,
    title: 'Enregistrer le tutoriel',
    completed: false
  },
  {
    id: 2,
    title: 'Préparer le tutoriel',
    completed: false
  },
  {
    id: 3,
    title: 'Enregistrer le tutoriel',
    completed: false
  },
  {
    id: 4,
    title: 'Préparer le tutoriel',
    completed: false
  },
  {
    id: 5,
    title: 'Enregistrer le tutoriel',
    completed: false
  }
]


const ADD_TODO_ACTION = 'ADD_TODO_ACTION'
const UPDATE_TODO_ACTION = 'UPDATE_TODO_ACTION'
const DELETE_TODO_ACTION = 'DELETE_TODO_ACTION'




export function todosReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, {id: ++id, completed: false, ...action.payload}]
    case UPDATE_TODO_ACTION:
      return  state.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, ...action.payload}
        } else {
          return todo
        }
      })
      case DELETE_TODO_ACTION:
      return  state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
}
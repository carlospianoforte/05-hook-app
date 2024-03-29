import React from 'react'

export const TodoItem = ({todo, onDeleteTodo, onTogleTodo }) => {
  return (
    
      <li className='list-group-item d-flex justify-content-between'>
          <span 
            className={`align-self-center ${todo.done ? 'text-decoration-line-through' : '' } `}
            onClick={() => onTogleTodo(todo.id)}
          >
              {todo.description}
          </span>

          <button 
            onClick={()=> onDeleteTodo(todo.id)} 
            className='btn btn-danger' 
          >Borrar</button>
      </li>
    
  )
}

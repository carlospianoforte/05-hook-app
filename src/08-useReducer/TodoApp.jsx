import React, { useEffect, useReducer } from 'react'
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'
import { useTodo } from '../hooks/useTodo'

export const TodoApp = () => {

    const {todos, 
            handleNewTodo, 
            handleDeleteTodo, 
            handleTogleTodo,
            pendingTodos, 
            todosCount} = useTodo()

  return (
    <>
        <h1>TodoApp: {todosCount} <small>pendientes: {pendingTodos}</small> </h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos} 
                    onDeleteTodo = {id => handleDeleteTodo(id)}
                    onTogleTodo = {id => handleTogleTodo(id)}
                />
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo= {handleNewTodo} />
            </div>
        </div>
    </>
  )
}

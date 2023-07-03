import React from 'react'
import Todo from './Todo'

export default function TodoList({ todoLists }) {
  return (
    todoLists.map(todo => {
      return <Todo key={todo.id} todo={todo} />
    })
  )
}

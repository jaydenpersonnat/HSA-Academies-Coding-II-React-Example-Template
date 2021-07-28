import React from 'react'
import { useState } from 'react'
import TodoItem from './components/TodoItem'
import { Link } from 'react-router-dom'

export const TodoList = () => {
  
  // const todos = ["buy apple juice", "practice React", "read a book"]
  const [todos, setTodos] = useState(["buy apple juice", "practice React", "read a book"])

  return (
    <>
      {todos.map((item, idx) => <TodoItem key={idx} idx={idx} item={item} todos={todos} setTodos={setTodos}/>)}
      <Link to="/">Back to Home</Link>
    </>
  )
}
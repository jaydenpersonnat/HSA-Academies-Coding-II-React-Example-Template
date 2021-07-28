import React from 'react'
import TodoItem from './components/TodoItem'
import { Link } from 'react-router-dom'

export const TodoList = () => {
  
  const todos = ["buy apple juice", "practice React", "read a book"]

  return (
    <div>
      <ol>
        <li>One fish</li>
        <li>Two fish</li>
        <li>Red fish</li>
        <li>Blue fish</li>
      </ol>
      {todos.map((item, idx) => <TodoItem key={idx} item={item}/>)}
      <Link to="/">Back to Home</Link>
    </div>
  )
}
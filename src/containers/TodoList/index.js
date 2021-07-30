import React from 'react'
import { useState } from 'react'
import TodoItem from './components/TodoItem'
import FormInput from './components/FormInput'
import { Title, StyledButton } from '../Home/styles'
import NavBar from '../NavBar'
import { Container } from './components/styles'

export const TodoList = ({ theme }) => {
  
  // const todos = ["buy apple juice", "practice React", "read a book"]
  const [todos, setTodos] = useState(["buy apple juice", "practice React", "read a book"])
  const [newItem, setNewItem] = useState("")
  const [newDate, setNewDate] = useState("")

  const addItem = () => {
    let newItems = todos.slice()
    const newTodo = newItem + "  " + newDate;
    newItems.push(newTodo)
    setTodos(newItems)
  }

  return (
    <>
      <NavBar/>
      <Container>
        <Title>To-Do:</Title>
        {todos.map((item, idx) => <TodoItem key={idx} idx={idx} item={item} todos={todos} setTodos={setTodos}/>)}
        <FormInput type="text" placeholder="Enter a To-Do" value={newItem} setValue={setNewItem}/>
        <FormInput type="date" value={newDate} setValue={setNewDate}/>
        <StyledButton onClick={addItem}>Add Item</StyledButton>
      </Container>
    </>
  )
}
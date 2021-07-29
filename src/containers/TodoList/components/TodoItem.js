import React from 'react'
import { Text, StyledButton } from '../../Home/styles'
import StyledItem from './styles'


const TodoItem = ({ idx, item, todos, setTodos }) => {
  
  const finishItem = () => {
    // alert(`Task '${item}' completed!`)
    // alert is a JS function that pops up a little notif box in the browser
    // remove this item from my list of todos
    let newTodos = todos.slice()
    newTodos.splice(idx, 1)
    setTodos(newTodos)
  }

  return (
    <div style={{display: 'flex', margin: '15px'}}>
      <StyledItem as='li'>{item}</StyledItem>
      <StyledButton onClick={finishItem}>Done!</StyledButton>
    </div>
  )
}

export default TodoItem
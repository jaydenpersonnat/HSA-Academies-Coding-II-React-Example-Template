import styled from 'styled-components'

const StyledItem = styled.li`
  color: ${({theme}) => theme.color.text};
  font-family: ${({theme}) => theme.font};
  font-size: ${({theme}) => theme.size.text};
  text-align: left;
`

export default StyledItem

export const Container = styled.div`
  background-color: ${({theme}) => theme.color.insert};
`
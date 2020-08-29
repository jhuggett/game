import styled from "styled-components"

interface SelectListProps {
  inputs: string[]
  setChosen: any
}

export const SelectList = ({ inputs, setChosen } : SelectListProps) => {
  return (
    <List>
      {inputs.map((choice, i) => {
        return <Choice key={choice} onClick={() => setChosen(i)}>{choice}</Choice>
      })}
    </List>
  )
}

const List = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`

const Choice = styled.div`
  user-select: none;
  margin: .25em .25em .25em .25em;
  padding: 15px 15px 15px 15px;
  border: 0.1em solid transparent;
  :hover {
    border: 0.1em solid ${props => props.theme.primary};
    cursor: pointer;
    border-radius: 0.5em;
  }
`

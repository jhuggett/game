import styled from "styled-components"

interface SelectListProps {
  inputs: string[]
  setChosen: any
}

export const SelectList = ({ inputs, setChosen } : SelectListProps) => {
  return (
    <List>
      {inputs.map((choice, i) => {
        return <Choice onClick={() => setChosen(i)}>{choice}</Choice>
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
  margin: .25em .25em .25em .25em;
  padding: 1em 1em 1em 1em;
  border: 0.1em solid transparent;
  :hover {
    border: 0.1em solid ${props => props.theme.primary};
    cursor: pointer;
    border-radius: 0.5em;
  }
`
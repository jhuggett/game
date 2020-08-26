import styled from "styled-components"

interface SelectListProps {
  inputs: string[]
  setChosen: any
}

export const SelectList = ({ inputs, setChosen } : SelectListProps) => {
  return (
    <>
      {inputs.map((choice, i) => {
        return <Choice onClick={() => setChosen(i)}>{choice}</Choice>
      })}
    </>
  )
}

const Choice = styled.div`
  margin-bottom: 1em;
  background-color: red;
`
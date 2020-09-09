import styled, { keyframes } from 'styled-components'
import { useState, useEffect, useRef } from 'react'
import { getRandomItem, getRandomBool, getRandomNumber, range, shuffle } from 'utils'
import { SelectList } from 'components'
import { ActionHandler } from '../events'



export default function Home() {
  const actionHandler = useRef(new ActionHandler())  

  const [output, setOutput] = useState<string>('')
  const [actions, setActions] = useState<string[]>([])

  useEffect(() => {
    
    if (output == '') {
      actionHandler.current.setActions()
      
      setOutput('You are standing in a forest.')
      setActions(actionHandler.current.availibleActions.map(action => action.description))
    }

  }, [])

  const act = (i: number) => {
    
    

    const newOutput = actionHandler.current.act(i)
    setOutput(newOutput)
    setActions(actionHandler.current.availibleActions.map(action => action.description))
  }

  return (
    <>
      <PageHeader></PageHeader>
      <Body>
        <Output>
          {output}
        </Output>
        <Input>
          <SelectList inputs={actions} setChosen={act} />
        </Input>
      </Body>
      <Footer></Footer>
    </>
  )
}

const PageHeader = styled.div`
  height: 20px;
`

const Body = styled.div`
  padding: 50px 50px 50px 50px;
`

const Footer = styled.div``

const Output = styled.div`
  color: ${props => props.theme.primary};
  text-align: center;
  font-family: ${props => props.theme.font};
`

const Input = styled.div`
  color: ${props => props.theme.primary};
  font-family: ${props => props.theme.font};
  text-align: center;
  margin: 5em auto;
  width: 50%;
`
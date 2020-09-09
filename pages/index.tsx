import styled, { keyframes } from 'styled-components'
import { useState, useEffect, useRef } from 'react'
import { getRandomItem, getRandomBool, getRandomNumber, range, shuffle } from 'utils'
import { SelectList } from 'components'
import { ActionHandler } from '../events'



export default function Home(props) {
  const actionHandler = useRef(new ActionHandler())  

  const [output, setOutput] = useState<string>('')
  const [actions, setActions] = useState<string[]>([])

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)
  

  useEffect(() => {
    
    props.theme.primary = 'orange'
    
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
      <HorizontalStack>
        <Sidebar isOpen={sidebarOpen}>

        </Sidebar>

        <MainSection>
          <PageHeader>
            <OptionsButton isOpen={sidebarOpen} onClick={() => {setSidebarOpen(!sidebarOpen)}} >
              {!sidebarOpen ? '< Collapse menu' : '> Menu'}
            </OptionsButton>
          </PageHeader>

          <Body>
            <Output>
              {output}
            </Output>
            <Input>
              <SelectList inputs={actions} setChosen={act} />
            </Input>
          </Body>

          <Footer></Footer>
        </MainSection>
      </HorizontalStack>
    </>
  )
}

interface SidebarProps {
  isOpen: boolean
}

const HorizontalStack = styled.div`
  display: flex;
`

const MainSection = styled.div`
  flex-grow: 100;
`

const Sidebar = styled.div<SidebarProps>`
  transition: 0.3s ease-out;
  opacity: ${props => props.isOpen ? '0' : '.33'};
  height: 100vh;
  width: ${props => props.isOpen ? '0%' : '250px'};
  border-right: 0.1em solid ${props => props.isOpen ? props.theme.background : props.theme.primary};
`

const OptionsButton = styled.div<SidebarProps>`
  height: 100%;
  user-select: none;
  color: ${props => props.theme.primary};
  font-family: ${props => props.theme.font};
  font-size: 1.25em;
  padding: 1em 1em 1em 1em;
  opacity: .05;
  cursor: pointer;
  transition: 0.3s ease-out;
  ${props => props.isOpen ? `
    :hover {
      opacity: 1;
      
    }
  ` : `opacity: 1;`}
  
`

const PageHeader = styled.div`
  display: flex;
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
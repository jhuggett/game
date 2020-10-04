import styled, { keyframes } from 'styled-components'
import { useState, useEffect, useRef } from 'react'
import { getRandomItem, getRandomBool, getRandomNumber, range, shuffle } from 'utils'
import { SelectList } from 'components'
import { ActionHandler } from '../events'
import { MenuHandler, MenuItem } from 'Menu'
import { InventoryView } from 'components/inventory'


export default function Home(props) {
  const actionHandler = useRef(null)  
  const menuHandler = useRef(null)

  const [output, setOutput] = useState<string>('')
  const [actions, setActions] = useState<string[]>([])

  const [menuOptions, setMenuOptions] = useState<MenuItem[]>()

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)
  
  const [showInventory, setShowInventory] = useState<boolean>(false)

  useEffect(() => {
    actionHandler.current = new ActionHandler()
    menuHandler.current = new MenuHandler({ themeHandler: props.themeHandler })
    setMenuOptions(menuHandler.current.getCurrentOptions())

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

  const menuItemSelected = (i: number) => {
    menuHandler.current.selectOption(menuOptions[i].index)
    setMenuOptions(menuHandler.current.getCurrentOptions())
  }

  return (
    <>
      <HorizontalStack>
        <Sidebar isOpen={sidebarOpen}>
          <SelectList inputs={menuOptions?.map(item => item.name) || []} setChosen={menuItemSelected} />
        </Sidebar>

        <MainSection>
          <PageHeader>
            <LeftJustified>
              <OptionsButton isOpen={sidebarOpen} onClick={() => {setSidebarOpen(!sidebarOpen)}} >
                {!sidebarOpen ? '< Collapse menu' : '> Menu'}
              </OptionsButton>
            </LeftJustified>

            <RightJustified>
              <OptionsButton isOpen={!showInventory} onClick={() => {setShowInventory(!showInventory)}} >
                {showInventory ? 'Close Inventory >' : 'Open Inventory <'}
              </OptionsButton>

            </RightJustified>

            
            
          </PageHeader>

          <Body>
            {!showInventory 
              ? <> 
              <Output>
                {output}
              </Output>
              <Input>
                <SelectList inputs={actions} setChosen={act} />
              </Input>
            </>
            : <>
              <InventoryView player={actionHandler.current.context.player} />
            </>
            
            }
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

const LeftJustified = styled.div`
  width: 50%;
`

const RightJustified = styled.div`
  width: 50%;
  text-align: right;
`

const HorizontalStack = styled.div`
  display: flex;
`

const MainSection = styled.div`
  flex-grow: 100;
  height: 100vh;
  overflow: auto;
`

const Sidebar = styled.div<SidebarProps>`
  transition: 0.4s ease-out;
  opacity: ${props => props.isOpen ? '0' : '1'};
  height: 100vh;
  width: ${props => props.isOpen ? '0%' : '250px'};
  border-right: 0.1em solid ${props => props.isOpen ? props.theme.background : props.theme.primary};
  ${props => props.isOpen && 'pointer-events: none;'}
  overflow-x: hidden;
`

const OptionsButton = styled.div<SidebarProps>`
  height: 100%;
  user-select: none;
  color: ${props => props.theme.primary};
  font-family: ${props => props.theme.font};
  font-size: 1.25em;
  padding: 1em 1em 1em 1em;
  opacity: 0;
  cursor: pointer;
  transition: 0.5s ease-out;
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
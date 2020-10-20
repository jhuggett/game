import { Player, Inventory } from "Player";
import styled from "styled-components";
import { useState } from "react";

interface InventoryViewProps {
  player: Player
}


export const InventoryView = ({ player } : InventoryViewProps) => {

  const [state, updateState] = useState(true)

  return (
    <>
    <List>
      {player.inventory.items.map(item => (
        <li>
          <div>
            {item.name} <button onClick={() => {player.inventory.removeItem(item); updateState(!state)}}>Drop</button>
          </div>
          
        </li>
      ))}
    </List>
    
    </>
  )
}

const List = styled.ol`
  color: ${props => props.theme.primary};
`
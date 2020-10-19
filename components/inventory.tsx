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
          {item.name}
          <div onClick={() => {player.inventory.removeItem(item); updateState(!state)}}>Drop</div>
        </li>
      ))}
    </List>
    
    </>
  )
}

const List = styled.ol`
  color: ${props => props.theme.primary};
`
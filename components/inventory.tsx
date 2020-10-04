import { Player, Inventory } from "Player";
import styled from "styled-components";

interface InventoryViewProps {
  player: Player
}


export const InventoryView = ({ player } : InventoryViewProps) => {


  return (
    <>
    <List>
      {player.inventory.items.map(item => (
        <li>
          {item.name}
        </li>
      ))}
    </List>
    
    </>
  )
}

const List = styled.ol`
  color: ${props => props.theme.primary};
`
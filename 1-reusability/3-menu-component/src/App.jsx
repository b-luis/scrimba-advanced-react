import React from 'react';
import { Menu, MenuButton, MenuDropdown, MenuItem } from "./components"

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]
  
  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <MenuDropdown>
        {sports.map(sport => (
          <MenuItem key={sport}>{sport}</MenuItem>
        ))}
      </MenuDropdown>
    </Menu>
  )
} 


export default App;

import React from "react";
import { Menu, MenuButton, MenuDropdown, MenuItem } from "./components";

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  return (
    <Menu>
      <MenuButton>Sports</MenuButton>
      <div>
        <MenuDropdown>
          {sports.map((sport) => (
            <MenuItem key={sport}>{sport}</MenuItem>
          ))}
        </MenuDropdown>
      </div>
    </Menu>
  );
}

export default App;

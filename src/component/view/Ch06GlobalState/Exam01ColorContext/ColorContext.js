import React, { useState } from 'react';

const ColorContext = React.createContext({
  color:"red"
});

export function ColorContextProvider(props) {
  const [color,setColor] = useState("orange");
  const value = {
    color : color,
    setColor : setColor,
  }
  return(
    <ColorContext.Provider value={value}>
      {props.children}
    </ColorContext.Provider>
  )
}

export default ColorContext;
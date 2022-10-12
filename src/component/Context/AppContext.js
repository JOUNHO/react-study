import React, { useState } from 'react';

const AppContext = React.createContext({
  uid : "",
  setUid : () => {}
})
export function AppContextProvider(props) {
  const [uid,setUid] = useState("");
  const value = {
    uid : uid,
    setUid : setUid,
  }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext;
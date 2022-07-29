import React, { useState } from "react"
import MainRoutes from "./routes"
import { AppContext } from './context';
import "./App.css";

function App() {
  const [ data, setData ] = useState([]);

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case 'CREATE_DATA':
        console.log("payload" ,payload.newData)
        setData(payload.newData);
        return;
      default:
        return;
    }
  };

  return (
    <AppContext.Provider value={{ data, dispatchUserEvent }}>
      <MainRoutes />
    </AppContext.Provider>
  )
}

export default App

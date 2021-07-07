import './App.css';
import React,{useEffect} from 'react'

import { connectWebSocket } from './utils/wssConnection/wssConnection';

function App() {
  useEffect(() => {
    connectWebSocket()
  }, [])
  return (
    <div >
      HELLO world
    </div>
  );
}

export default App;

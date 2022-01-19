import React from 'react';
import './App.css';
import Home from './Components/Home/Home';

import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='mainbody'>  
 
        <Sidebar />

      
        <Home/>

      </div>
      
      
    </div>
  );
}

export default App;

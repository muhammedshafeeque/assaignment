import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='mainbody'> 
        <Sidebar />  
        <Home/>

      </div>
      <Footer/>
      
    </div>
  );
}

export default App;

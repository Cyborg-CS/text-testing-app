// import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import './App.css';
import Alerts from './components/Alerts';

export default function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const takeAlert =(message)=>{
   setAlert(message);
   setTimeout(() => {
     setAlert(null)
   }, 1500);
  };

  const toggleDarkMode =()=>{
    if(mode=== 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      takeAlert(" Dark Mode Enabled.")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      takeAlert(" Dark Mode Disabled.");
    }
  }

  return (
    <>
    <div className="App">
      <Navbar toggleMode={toggleDarkMode} mode={mode} title="TextLab" linkOne="Home" linkTwo="About"></Navbar>   
    </div>
    <div><Alerts alert ={alert}/></div>
    <div>
      {/* <About/> */}
      <TextArea mode={mode} showAlert ={takeAlert}/>
    </div>
    </>
  );
}


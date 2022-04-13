// import About from './components/About';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

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
      takeAlert(" Dark Mode Enabled.");
      document.title ="TextLab | home (Dark)";
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      takeAlert(" Dark Mode Disabled.");
      document.title ="TextLab | home";

    }
  }

  return (
    <Router>
    <>
    <div className="App">
      <Navbar toggleMode={toggleDarkMode} mode={mode} title="TextLab" linkOne="Home" linkTwo="About"></Navbar>   
    </div>
    <div><Alerts alert ={alert}/></div>
    <div>
    <Routes>
    <Route exact path="/about" element={<About mode={mode}/>} />
    <Route exact path="/" element={<TextArea exact mode={mode} showAlert ={takeAlert}/>}/>
    </Routes>      
    </div>
    </>
  </Router>

  );
}


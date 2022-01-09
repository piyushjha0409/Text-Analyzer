import './App.css';
import { Navbar } from './components/Navbar';
import {TextForm} from './components/TextForm.js';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

 const showAlert = (message, type) =>{
   setAlert({
     msg: message,
     type: type
   })
   setTimeout(()=>{
     setAlert(null);
   }, 1500);
 }

 const  toggleMode = ()=>{
  if(mode ==="light"){
    setMode('dark');
    document.body.style.backgroundColor = " #212122";
    showAlert("Dark mode is enabled.","Success!");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = "white";
    showAlert("Light mode is enabled.","Success!");
  }
 }
  return (
    <>
<Navbar title="TextAnalyzer :)" aboutText="Home" mode={mode}  toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'> 
<TextForm showAlert={showAlert} heading="Get your Text Analyzed!" title="Text Analyzation box" mode={mode} alert={alert} />
</div>
    </>
  );
}

export default App;

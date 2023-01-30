import { useState } from "react";
import Navbar from "./components/Navbar";
import { TextForm } from "./components/TextForm";
import { About } from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  
 const [mode,setMode]= useState('light');
 const [navEnableMode,setNavEnableMode]=useState('dark');
  const toggleMode=()=>{
    setNavEnableMode(mode);
    const newMode= ((mode==='light')?'dark':'light');
    setMode( newMode);
    
    document.body.style.backgroundColor = mode==='light'?"#28277e":"white";    
    if(newMode==='dark') document.title='TextUtils - Dark Mode';
    else document.title= 'TextUtils - Light Mode';
   
    
  }
  return (
    <>
   <Router>
   <div>
    <Navbar title="TextUtils" aboutText="About" mode={mode} enMode={navEnableMode} toggleMode={toggleMode} />
    <div className="container mt-2" >
    <Routes>
          <Route exact path="/about" element={<About/>} />
           
          
          <Route exact path="/" element={<TextForm heading="Enter the text to analyse" mode={mode} />} />
          
          
    </Routes>
    
    
    </div>
    </div> 
    </Router>
   </>
  );
}

export default App;

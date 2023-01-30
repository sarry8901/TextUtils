import React from 'react'
import { useState } from 'react';
export const TextForm = (props) => {
    
    
  const [text,setText]= useState("");
  
  
 
    
    const handleUpClick=()=>{
        // e.preventDefault();
        let  newText= text.toUpperCase();
        setText(newText)
    }
    const handleLowClick=()=>{
        // e.preventDefault();
        let  newText= text.toLowerCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
      
      
        setText(event.target.value)
    }

  return (
    <>

    <div style={{color:props.mode==='dark'?'white':'black'}}>
     
     <h1>{props.heading}</h1>
  <div className="mt-3" >
   
    <textarea value={text} onChange={handleOnChange}  id="myBox" rows="8" cols="100" style={{border:"2px solid black",outline:"none" ,background:props.mode==='dark'?'#28277e':'white',color:props.mode==='light'?'gray':'white'}}  ></textarea>
    <div >

   <button  className="btn btn-primary mx-2 " 
   type='button' onClick={handleUpClick}>Convert to Uppercase</button>
   <button  className="btn btn-primary mx-2" type='button' onClick={handleLowClick}>Convert to Lowercase</button>
    </div>
  </div>
    </div>
     
    <div className='mt-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(' ')
            .filter(function(n) { return n !== '' })
            .length} words and {text.length}</p>
       <p>{0.008*text.split(" ").length} Minutes read</p>

       <h2>Preview</h2>
       <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
  
  


    </>
  )
}

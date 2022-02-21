import React from 'react';
import { useState } from 'react';

export default function TextArea(props) {
  
  const [text, setText] = useState("");
  const [btnName, setBtnName] = useState('Reverse Text');

  function updateText(event){
    let userText = event.target.value
    setText(userText)

  }
  
  const turnUpText = ()=>{
   let newText = text.toUpperCase();
   setText(newText);
  };
  
  const turnLowText = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
   };

   const clearText = ()=>{
     setText('');
   };

   const reverseText =()=>{
    if(btnName === 'Reverse Text'){
    let newText = text.split(" ").map((currentWord)=>{
      let reverseWord = currentWord.split('').reverse().join('');
      return reverseWord
    })
    setText(newText.join(" "));
    setBtnName('Forward Text');
  }else{
    let newText = text.split(" ").map((currentWord)=>{
      let reverseWord = currentWord.split('').reverse().join('');
      return reverseWord
    })
    setText(newText.join(" "));
    setBtnName('Reverse Text')
  };
   };

   const copyText = ()=>{
    let text = document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copied to Clipboard");
   }

   const clearExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
   };

  return (
    <div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
<div className= "my-3">
  <h1>Enter Your Text Here</h1>
  <textarea className="form-control" onChange={updateText} value={text} id="exampleFormControlTextarea1" rows="10"
  style={{backgroundColor: props.mode==='dark'?'black':'white',
  color: props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className='btn btn-primary'onClick={turnUpText}>Turn To Uppercase</button>
<button className='btn btn-primary mx-2'onClick={turnLowText}>Turn To Lowercase</button>
<button className='btn btn-primary mx-0.5'onClick={reverseText}>{btnName}</button>
<button className='btn btn-primary mx-2'onClick={copyText}>Copy Text</button>
<button className='btn btn-primary mx-0.5'onClick={clearText}>Clear</button>
<button className='btn btn-primary mx-2 my-2'onClick={clearExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Text Summary</h2>
      <p>Your text has {text.split(" ").length} words and {text.split('').length} characters</p>
      <p>{0.008 * text.split(' ').length.toFixed(3)} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </div>
  );
}

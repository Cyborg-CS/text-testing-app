import React from 'react';
import { useState } from 'react';

export default function TextArea() {
  
  const [text, setText] = useState("");
  
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
    let newText = text.split(" ").map((currentWord)=>{
      let reverseWord = currentWord.split('').reverse().join('');
      return reverseWord
    })
    setText(newText.join(" "));
   };

  return (
    <div>
    <div className="container">
<div className= "my-3">
  <h1>Enter Your Text Here</h1>
  <textarea className="form-control" onChange={updateText} value={text} id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
<button className='btn btn-primary'onClick={turnUpText}>Turn To Uppercase</button>
<button className='btn btn-primary mx-2'onClick={turnLowText}>Turn To Lowercase</button>
<button className='btn btn-primary mx-0.5'onClick={reverseText}>Reverse Text</button>
<button className='btn btn-primary mx-2'onClick={clearText}>Clear</button>
    </div>
    <div className='container my-3'>
      <h2>Text Summary</h2>
      <p>Your text has {text.split(" ").length} words and {text.split('').length} characters</p>
      <p>{0.008 * text.split(' ').length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </div>
  );
}

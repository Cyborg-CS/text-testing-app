import React from 'react';
import { useState } from 'react';

export default function TextArea(props) {
  
  document.title = 'TextLab | home';
  const [text, setText] = useState("");
  const [reverseBtnName, setReverseBtnName] = useState('Reverse Text');
  const [textSize, setTextSize] = useState('normal');
  // const [boldBtnName, setBoldBtnName] = useState('Bold');
  const [textStyle, setTextStyle] = useState('normal');

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
    if(reverseBtnName === 'Reverse Text'){
    let newText = text.split(" ").map((currentWord)=>{
      let reverseWord = currentWord.split('').reverse().join('');
      return reverseWord;
    })
    setText(newText.join(" "));
    setReverseBtnName('Forward Text');
  }else{
    let newText = text.split(" ").map((currentWord)=>{
      let reverseWord = currentWord.split('').reverse().join('');
      return reverseWord
    })
    setText(newText.join(" "));
    setReverseBtnName('Reverse Text')
  };
   };

   const copyText = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert(" Copied to Clipboard");
   }

   const clearExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
   };

   const makeTextBold = () =>{
    //  let boldText = document.getElementById('exampleFormControlTextarea1').style.fontWeight = "bold";
    if(textSize === 'normal'){ 
    setTextSize('bold');
    // setBoldBtnName('Thin');
    }else{
      setTextSize('normal');
      // setBoldBtnName('Bold')
    }
   };

  const makeTextItalic = ()=>{
    if(textStyle === 'normal'){
      setTextStyle('italic');
    }else{
     setTextStyle('normal');
    }
  }

  return (
    <div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
<div className= "my-3">
  <h1>Enter Your Text Here</h1>
  <textarea className="form-control" onChange={updateText} value={text} id="exampleFormControlTextarea1" rows="10"
  style={{backgroundColor: props.mode==='dark'?'black':'white',
  color: props.mode==='dark'?'white':'black', fontWeight:textSize, fontStyle:textStyle}}></textarea>
</div>
<button className='btn btn-primary'onClick={turnUpText}>Turn To Uppercase</button>
<button className='btn btn-primary mx-2 my-2'onClick={turnLowText}>Turn To Lowercase</button>
<button className='btn btn-primary mx-0.5 my-2'onClick={reverseText}>{reverseBtnName}</button>
<button className='btn btn-primary mx-2 my-2'onClick={copyText}>Copy Text</button>
<button className='btn btn-primary mx-2 my-2'onClick={makeTextBold}>Bold</button>
<button className='btn btn-primary mx-2 my-2'onClick={makeTextItalic}>Italic</button>
<button className='btn btn-primary mx-0.5 my-2'onClick={clearText}>Clear</button>
<button className='btn btn-primary mx-2 my-2'onClick={clearExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Text Summary</h2>
      <p>Your text has {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.split('').filter((item)=>{return item!==' '}).length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length.toFixed(3)} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </div>
  );
}

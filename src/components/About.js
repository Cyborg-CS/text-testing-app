    import React,{useState} from 'react';

    export default function About(props) {
    
           document.title = 'TextLab | about';
    //     const [aboutStyle, setAboutStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    //    });
    // const [aboutBtnStyle, setAboutBtnStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     border: '0.5px solid white'
    //    });
    
    // const [btnName, setBtnName] = useState("Dark Mode");   

    // const turnOnDarkMode = ()=>{
       
    //     if(aboutStyle.color === 'black'){
    //         setAboutStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: 'none' 
    //         });
    //         setBtnName("Light Mode");
    //     }else{
    //         setAboutStyle({
    //             color: 'black',
    //             backgroundColor: 'white' 
    //         });
    //         setBtnName("Dark Mode");
    //     };

    //   const aboutBtnDarkMode = ()=>{

    //   }  
    // };
        return (
        
        <div className={`container my-3 bg-${props.mode==='dark'?'black':''}`} style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>About us</h1>
        <div className="accordion" id="accordionExample"  >
    <div className="accordion-item" style={{color:props.mode==='dark'?'white':'black',
     backgroundColor:props.mode==='dark'?'black':'white'}}>
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" style={{color:props.mode==='dark'?'white':'black',
     backgroundColor:props.mode==='dark'?'black':'white', border: props.mode==='dark'?'0.5px solid white':'0.5px solid grey'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What is TextLab ?
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
        <div className="accordion-body" >
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={{color:props.mode==='dark'?'white':'black',
     backgroundColor:props.mode==='dark'?'black':'white'}}>
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" style={{color:props.mode==='dark'?'white':'black',
     backgroundColor:props.mode==='dark'?'black':'white', border: props.mode==='dark'?'0.5px solid white':'0.5px solid grey'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Why use TextLab ?
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={{color:props.mode==='dark'?'white':'black',
     backgroundColor:props.mode==='dark'?'black':'white'}}>
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" style={{color:props.mode==='dark'?'white':'black',
     backgroundColor:props.mode==='dark'?'black':'white', border: props.mode==='dark'?'0.5px solid white':'0.5px solid grey'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Contacts & Github
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    </div>
        </div>
    );
    }

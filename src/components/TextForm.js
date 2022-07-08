import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('UpperCase Button Clicked');
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to uppercase", 'success');
    }
    const handleLoClick = () => {
        console.log('UpperCase Button Clicked');
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text converted to Lowercase', 'success');
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
        
    }
    const handleAlClick = () => {
        const newText = text.split('').map((item,index) => {

        if(index%2 === 0){
            return item.toLowerCase();
        } else {
            return item.toUpperCase();
        }
        }).join('');
        setText(newText);
        props.showAlert('Text converted to lertnate', 'success');

    }
    const handleCpClick = () => {
        const newText = text.split('').map((item,index) => {
            if(text[index - 1] === " " || index === 0) {
                return item.toUpperCase();
            }
            return item.toLowerCase();
        }).join("")
        setText(newText)
    }
    const handleSentenceClick = ()=> {
        const newText = text.split('').map((item,index) => {
        if(text[index - 1] === '.' || index === 0){
            return item.toUpperCase();
            
        }
        return item.toLowerCase();
        }).join("");
        setText(newText);
        
    }
   
    const handleClearClick = () => {
        setText("");
        props.showAlert('Text converted to clear', 'success');
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text converted to copy', 'success');
    }

    const [text, setText] = useState("");
    const word = (text) => {
        const newText = text.length(" ");
        console.log(newText)
    }
    return (
        <>
            <div className='container' style={{backgroundcolour: props.mode==='dark'? '#626363': 'white', color:props.mode=== 'dark'?'white': 'black'}}>
                <div className="mb-4 my-4">
                    <h2 className='mb-3'>{props.heading}</h2>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" placeholder='Enter Text Here'></textarea>
                    <button className='btn btn-primary mt-3 mx-2' onClick={handleUpClick}>Convert to uppercase</button>
                    <button className='btn btn-primary mt-3 mx-2' onClick={handleLoClick}>Convert to lowercase</button>
                    <button className='btn btn-primary mt-3 mx-2' onClick={handleAlClick}>Convert to alternatecase</button>
                    <button className='btn btn-primary mt-3 mx-2' onClick={handleSentenceClick}>Sentence Case</button>
                    <button className='btn btn-primary mt-3 mx-2' onClick={handleCpClick}>Captilized</button>
                    <button className='btn btn-primary mt-3 mx-2' onClick={handleCopy}>Copy Text</button>
                    <button className='btn btn-primary mt-3 mx-2' onClick={handleClearClick}>Clear</button>
                </div>
            </div>
            <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                
                <p>{text.split(' ').length} Word, And {text.length} character</p>
                {/* <p>{0.008 * text.split(' ').length} Minutes Read</p> */}
                <p>Preview</p>
                <p>{text.length > 0? text: "Enter something in the above text box to preview it here"}</p>

            </div>
        </>
    )
}
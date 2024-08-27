import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
       // console.log("UpperCase Was Clicked" +text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLoClick = () =>{
        // console.log("UpperCase Was Clicked" +text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClearClick = () =>{
        // console.log("UpperCase Was Clicked" +text);
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }
    // const changeColor = () => {
    //     // Toggle between two colors, e.g., black and red
    //     setTextColor(prevColor => (prevColor === 'black' ? 'red' : 'black'));
    //   };
    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value)
    }
    const handleExtraSpace = () =>{
      let newText = text.split(/[ ]+/); //razex method
      setText(newText.join(" "))
      props.showAlert("Extra Space Removed", "success")
    }
    const [text, setText] = useState("")
    // const [textColor, setTextColor] = useState(' ');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black'}}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      {/* <button className="btn btn-primary mx-1" onClick={changeColor}>Change Text Color</button> */}
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-3 " style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s/).length} Words and {text.length} Characters </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read </p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}

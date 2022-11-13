import React, { useState } from "react";

export default function TextForm() {
  const convertUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const convertLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const onChangeHandle = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // console.log(setText);

  return (
    <>
      <div className="mt-5 container">
        <textarea
          className="form-control mb-3"
          id="exampleFormControlTextarea1"
          rows="7"
          value={text}
          onChange={onChangeHandle}
        ></textarea>
        <button onClick={convertUp} className="btn btn-outline-dark">
          Convert To Uppercase
        </button>
        <button onClick={convertLow} className="btn btn-outline-dark">
          Convert To LowerCase
        </button>
      </div>

      <div className="container my-4">
        <h1>Your Text Summery</h1>
        <h3>
          {text === "" ? 0 : text.split(" ").length} words and {text.length}{" "}
          charecters
        </h3>
        <h5>{text === "" ? 0 : 0.008 * text.split(" ").length} Minutes read</h5>
      </div>
    </>
  );
}

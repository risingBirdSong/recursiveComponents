import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


interface rcrsPlyA_propsI {
  content: string;
  cnt: number;
  border?: {
    thickness: number
  }
}

const rcrsPlyA = (props: rcrsPlyA_propsI) => {
  if (props.cnt <= 0) {
    return props.content;
  }
  props.cnt--;
  return (
    <div style={{ backgroundColor: `rgb(${255 - props.cnt * 5}, 55, ${55 + props.cnt * 4})`, border: ` ${props.border?.thickness ?? 1}px solid black`, width: props.cnt * 80, height: props.cnt * 80, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: `${props.cnt * 5}px`, boxShadow: `${props.cnt}px -${props.cnt}px 20px 1px darkmagenta` }}>
      {rcrsPlyA(props)}
    </div>
  )
}

function App() {
  let [toggleFirst, settoggleFirst] = useState(false)
  return (
    <div className="App">
      <div className="buttonHolder">
        <button onClick={() => {
          settoggleFirst(!toggleFirst);
        }}>1st</button>
      </div>
      <div className="myContainer">

        {toggleFirst ? rcrsPlyA({ content: "!", cnt: 10, border: { thickness: 5 } }) : ""}
      </div>
    </div>
  );
}

export default App;

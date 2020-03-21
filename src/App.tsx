import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';



interface rcrsPlyA_propsI {
  content: string;
  count: number;
  backgroundColorMultiply: number,
  shadowColor: string,
  borderRadiusColorMult: number,
  borderColor: string,
  marginRight: number,
  marginTop: number,
}

const rcrsPlyA = (props: rcrsPlyA_propsI) => {
  if (props.count <= 0) {
    return props.content;
  }
  props.count--;
  return (
    <div style={{ backgroundColor: `rgb(${255 - props.count * props.backgroundColorMultiply}, 20, ${55 + props.count * 1})`, border: `${props.count}px solid ${props.borderColor}`, width: props.count * 80, height: props.count * 80, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: `${props.count * props.borderRadiusColorMult}px`, boxShadow: `-10px -10px 5px -15px ${props.shadowColor}, ${props.count * -1.5 - 7}px ${props.count * -1.2 - 7}px 5px -10px black , inset ${props.count * 1.5}px ${props.count * 1.5}px ${props.count * 2}px ${props.count}px orange `, marginTop: `${props.marginTop * props.count}px`, marginRight: `${props.marginRight * props.count}px`, padding: props.count * 2 }}>
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

        {toggleFirst ? rcrsPlyA({ content: ".", count: 10, backgroundColorMultiply: 15, shadowColor: "red", borderRadiusColorMult: 15, borderColor: "coral", marginTop: 7, marginRight: 7 }) : ""}
      </div>
    </div>
  );
}

export default App;

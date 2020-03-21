import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';



interface rcrsPlyA_propsI {
  content: string;
  cnt: number;
  border?: {
    thickness: number
  }
  bckGrndClrMltp: number,
  shdwClr: string,
  brdRdsMltp: number,
  brdColor: string,
  mrgRight: number,
  mrgTop: number,
}

const rcrsPlyA = (props: rcrsPlyA_propsI) => {
  if (props.cnt <= 0) {
    return props.content;
  }
  props.cnt--;
  return (
    <div style={{ backgroundColor: `rgb(${255 - props.cnt * props.bckGrndClrMltp}, 20, ${55 + props.cnt * 1})`, border: `${props.cnt}px solid ${props.brdColor}`, width: props.cnt * 80, height: props.cnt * 80, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: `${props.cnt * props.brdRdsMltp}px`, boxShadow: `-10px -10px 5px -15px ${props.shdwClr}, ${props.cnt * -1.5 - 7}px ${props.cnt * -1.2 - 7}px 5px -10px black , inset ${props.cnt * 1.5}px ${props.cnt * 1.5}px ${props.cnt * 2}px ${props.cnt}px orange `, marginTop: `${props.mrgTop * props.cnt}px`, marginRight: `${props.mrgRight * props.cnt}px`, padding: props.cnt * 2 }}>
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

        {toggleFirst ? rcrsPlyA({ content: ".", cnt: 10, bckGrndClrMltp: 15, shdwClr: "red", brdRdsMltp: 15, brdColor: "coral", mrgTop: 7, mrgRight: 7 }) : ""}
      </div>
    </div>
  );
}

export default App;

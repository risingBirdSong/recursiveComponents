import React from 'react';
import logo from './logo.svg';
import './App.css';


interface rcrsPlyA_propsI {
  content: string;
  cnt: number;
}

const rcrsPlyA = (props: rcrsPlyA_propsI) => {
  if (props.cnt <= 0) {
    return props.content;
  }
  props.cnt--;
  return (
    <div style={{ backgroundColor: `rgb(${255 - props.cnt * 5}, 55, ${55 + props.cnt * 10})`, border: "1px solid black", width: props.cnt * 80, height: props.cnt * 80, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: `${props.cnt * 4}px`, boxShadow: `${props.cnt}px -${props.cnt}px 20px 1px black` }}>
      {rcrsPlyA(props)}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="myContainer">
        {rcrsPlyA({ content: "!", cnt: 10 })}
      </div>
    </div>
  );
}

export default App;

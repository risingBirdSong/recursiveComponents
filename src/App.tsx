import React from 'react';
import logo from './logo.svg';
import './App.css';


interface rcrsPlyA_propsI {
  content: string;
  recursiveCount: number;
}

const rcrsPlyA = (props: rcrsPlyA_propsI) => {
  if (props.recursiveCount <= 0) {
    return props.content;
  }
  props.recursiveCount--;
  return (
    <div style={{ backgroundColor: "beige", border: "3px solid black", width: props.recursiveCount * 20, height: props.recursiveCount * 20 }}>
      {rcrsPlyA(props)};
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="myContainer">
        {rcrsPlyA({ content: "hello world", recursiveCount: 10 })}
      </div>
    </div>
  );
}

export default App;

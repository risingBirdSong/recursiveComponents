import React, { useState, useEffect } from 'react';

interface rcrsPlyA_propsI {
  content: string;
  count: number;
  backgroundColorMultiply: number,
  shadowColor: string,
  borderColor: string,
  marginRight: number,
  marginTop: number,
  inc: number
}

const rcrsPlyA = (props: rcrsPlyA_propsI) => {
  if (props.count <= 0) {
    return props.content;
  }
  props.count--;
  props.inc += 5;
  console.log("divide", 1 - (1 / (props.count)))
  let randoMul = 40;
  return (
    <div style={{
      backgroundColor: `rgba(${255 - props.count * props.backgroundColorMultiply}, 20, ${55 + props.count * 1}, ${1 - 1 / (props.count)})`,
      border: `1px inset ${props.borderColor}`,
      width: props.count * 40,
      height: props.count * 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // / ${40 + props.inc}px ${10 + props.inc}px ${15 + props.inc}px ${30 + props.inc}px
      borderRadius:
        `
        ${4 * props.inc + Math.floor(Math.random() * randoMul)}px ${2 * props.inc + Math.floor(Math.random() * randoMul)}px ${2 * props.inc + Math.floor(Math.random() * randoMul)}px ${4 * props.inc + Math.floor(Math.random() * randoMul)}px
        /
        ${5 * props.inc + Math.floor(Math.random() * randoMul)}px ${9 * props.inc + Math.floor(Math.random() * randoMul)}px ${16 * props.inc + Math.floor(Math.random() * randoMul)}px ${5 * props.inc + Math.floor(Math.random() * randoMul)}px
          `,

      boxShadow: `7px 7px 22px -3px purple, -10px -10px 15px -3px black , inset 3px 3px 10px ${props.inc / 2}px blueviolet`,
      transform: `rotate(50deg)`
    }}>
      {rcrsPlyA(props)}
    </div>
  )
}

function App() {
  let [toggleFirst, settoggleFirst] = useState(true)
  return (
    <div className="App">
      <div className="myContainer">
        {toggleFirst ? rcrsPlyA({ content: ".", count: 15, backgroundColorMultiply: 15, shadowColor: "red", borderColor: "red", inc: 0, marginTop: 7, marginRight: 7 }) : ""}
      </div>
    </div>
  );
}

export default App;

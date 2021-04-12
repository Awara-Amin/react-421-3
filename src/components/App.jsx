import React, { useState } from "react";

function App() {
  // var count = 0;
  // const state = useState();
  // const state = useState(1256);
  const [count, setCount] = useState(0);

  // const [red, green, blue] = [9, 132, 227];
  // console.log(red);
  // or like that
  // const rgb = [9, 132, 227];
  // console.log(rgb[2]);
  // to hold what is in the useState
  // console.log(state[0]);

  function increase() {
    setCount(count + 1);
    // count++;
    // // console.log("I got clicked mate :)");
    // console.log(count);
    // //  we rerender to see change on the screen
    // ReactDOM.render(
    //   <div className="container">
    //     {/* <h1>0</h1> */}
    //     <h1>{count}</h1>
    //     {/* <button>+</button> */}
    //     <button onClick={increase}>+</button>
    //   </div>,
    //   document.getElementById("root")
    // );
  }

  function decrease() {
    setCount(count - 1);
  }

  //  make this like an out put for the App above
  return (
    <div className="container">
      {/* <h1>0</h1> */}
      {/* <h1>{count}</h1> */}
      {/* <h1>{state[0]}</h1> */}
      <h1>{count}</h1>
      {/* <button>+</button> */}

      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

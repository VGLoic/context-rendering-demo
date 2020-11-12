import React from "react";
import '../App.css';
import useRenderCount from "../useRenderCount";
import useForceRerender from "../useForceRerender";


function CountDisplay({ count }) {
  const forceRerender = useForceRerender();

  return (
    <div className="component">
      <RenderCount forceRerender={forceRerender} />
      <div>Count: {count}</div>
    </div>
  )
}

function IncrementButton({ increment }) {
  const forceRerender = useForceRerender();
  return (
    <div className="component">
      <RenderCount forceRerender={forceRerender} />
      <button onClick={increment}>Increment</button>
    </div>
  )
}

function WhatAmIDoingHere() {
  const forceRerender = useForceRerender();
  return (
    <div className="component">
      <RenderCount forceRerender={forceRerender} />
      <div>What am I doing here?</div>
      <div>I am heavy</div>
    </div>
  )
}

function RealApp({ count, increment }) {
  const forceRerender = useForceRerender();

  return (
    <div className="component">
      <RenderCount forceRerender={forceRerender} />
      <h5>I'm layouting, heavily layouting</h5>
      <div className="layout">
        <WhatAmIDoingHere />
        <IncrementButton increment={increment} />
        <CountDisplay count={count} />
      </div>
    </div>
  )
}

function RenderCount({forceRerender}) {
  const renderCountRef = useRenderCount();
  return (
    <div className="render-count" onClick={forceRerender}>
      {renderCountRef.current}
    </div>
  )
}

function reducer(count, action) {
  if (action.type === "increment") return count + 1;
  return count;
}

function App() {
  const forceRerender = useForceRerender();

  const [count, dispatch] = React.useReducer(reducer, 0);
  const increment = () => dispatch({ type: "increment" });

  return (
    <div className="App">
      <header className="App-header component">
        <RenderCount forceRerender={forceRerender} />
        <RealApp count={count} increment={increment} />
      </header>
    </div>
  );
}

export default App;

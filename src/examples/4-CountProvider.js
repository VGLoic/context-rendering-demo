import React from "react";
import '../App.css';
import useRenderCount from "../useRenderCount";
import useForceRerender from "../useForceRerender";

/* ########################################## */
// CountContext.js
const CountContext = React.createContext();
CountContext.displayName = "CountContext"

function CountProvider(props) {
    const [count, dispatch] = React.useReducer(reducer, 0);
    const increment = React.useCallback(() => dispatch({ type: "increment" }), [dispatch]);

    const value = React.useMemo(() => ({
        count,
        increment
      }), [count, increment]);

    return <CountContext.Provider value={value} {...props} />
}

function useCount() {
    const context = React.useContext(CountContext);
    if (!context) {
        throw new Error("useCount must be used within a CountProvider");
    }
    return context;
}
/* ########################################## */


function CountDisplay() {
  const forceRerender = useForceRerender();
  const {count} = useCount();

  return (
    <div className="component">
      <RenderCount forceRerender={forceRerender} />
      <div>Count: {count}</div>
    </div>
  )
}

function IncrementButton() {
  const forceRerender = useForceRerender();
  const {increment} = useCount();
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

function RealApp() {
  const forceRerender = useForceRerender();

  return (
    <div className="component">
      <h5>I'm layouting, heavily layouting</h5>
      <div className="layout">
        <RenderCount forceRerender={forceRerender} />
        <WhatAmIDoingHere />
        <IncrementButton />
        <CountDisplay />
      </div>
    </div>
  )
}
// eslint-disable-next-line no-func-assign
RealApp = React.memo(RealApp);

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

  return (
    <div className="App">
      <header className="App-header component">
        <CountProvider>
          <RenderCount forceRerender={forceRerender} />
          <RealApp />
        </CountProvider>
      </header>
    </div>
  );
}

export default App;

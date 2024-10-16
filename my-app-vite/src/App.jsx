// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import catStepan from "./assets/cat-stepan.jpg";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h2>Hello World</h2>
      <p>
        Stepan, born in 2008, is a Ukrainian striped cat who gained worldwide
        popularity on social media for his calm nature and jaded posture.
      </p>
      <a href="./assets/cat-stepan.jpg">
        <img src={catStepan} className="cat-stepan" alt="cat-stepan" />
      </a>
    </>
  );
}

export default App;

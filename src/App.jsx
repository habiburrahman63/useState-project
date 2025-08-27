import { useState } from "react";

function App() {
  const [piku, setPiku] = useState(10);
  function doctoy() {
    if (piku > 0) {
      setPiku(piku - 1);
    }
  }

  return (
    <div className="useStat">
      <h1>{piku}</h1>
      <button onClick={doctoy}>Click</button>
    </div>
  );
}

export default App;

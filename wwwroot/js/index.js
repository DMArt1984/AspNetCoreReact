import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Счетчик: {count}</h1>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(0)}>Сбросить</button>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
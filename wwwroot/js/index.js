import React from "react";
import ReactDOM from "react-dom";

console.log("✅ React-код загружен!");

document.getElementById("root").innerHTML = "<h1>Проверка!</h1>"; // Вставка текста напрямую

function App() {
    return <h1>Привет из React!</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));
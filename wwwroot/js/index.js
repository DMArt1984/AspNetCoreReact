import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return <h1>Привет из React, встроенного в ASP.NET Core!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));
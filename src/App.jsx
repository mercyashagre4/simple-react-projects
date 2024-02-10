
/* ===============Random Joke generator ===============*/

import React from 'react';
import JokeGenerator from './components/JokeGenerator'; // importing JokeGenerator to be used by App.jsx

function App() {
  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Random Joke Generator</h1>
        <JokeGenerator />
    </div>
);
}
export default App;

import React from 'react';
import TypoTolerantSearch from './components/spellchecking.jsx'; // Adjust path as necessary

function App() {
    return (
        <div className="App">
            <h1>Typo-Tolerant Search with Fuse.js</h1>
            <TypoTolerantSearch />
        </div>
    );
}

export default App;

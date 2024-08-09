import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import {menudata} from "./menudata.jsx";

// Example data (this could be fetched from an API)



export default function TypoTolerantSearch() {

    // defining initial states for a query and search results.
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(menudata);

    useEffect(() => {

        // initiate a fuse instance by passing the data and configuration seettings.
        const fuse = new Fuse(menudata, {

            keys: ['title'],           // Keys to search in
            includeScore: true,        // Include score in the search results
            threshold: 0.3             // Controls the sensitivity 0 means only perfect matches. 1 is anything
        });


        // handling queries by invoking fuse search method when
        if (query) {
            const result = fuse.search(query);
            setResults(result.map(r => r.item));
        } else {
            setResults(menudata); // Reset to all data when query is empty
        }
    }, [query]);



    return (

        // Simple program comparing the implementation of fuzzy search vs a basic spellcheck

        <div>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <ul>
                {results.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>


            <h2>Correcting for user mistakes only using spellcheck</h2>
            <textarea spellCheck="true">
                Margarita Pizza, Ceasar Salad, Fettucine Alfredo, Quesedilla, Creme Brulee, Capuccino, Ratatoullie, Musaka, Expresso, Worcester Sauce, Nocci, fricase, gnocci
            </textarea>


        </div>
    );
}



import React from "react";
import { useCatFact } from "../hooks/useCatFact";
import { useCatImage } from "../hooks/useCatImage";

function Cat() {
    const { fact, refreshFact } = useCatFact();
    const { imageURL } = useCatImage({ fact });

    const handleClick = async () => {
        refreshFact();
    };

    return(
        <main>
            <h1>App de gatitos</h1>

            <button onClick={handleClick}>Get new fact</button>

            { fact && <p>{ fact }</p> } 
            { imageURL && <img src={imageURL} alt={`Image extracted using the three first Words for ${fact}`} /> }
        </main>
    );
}

export default Cat;
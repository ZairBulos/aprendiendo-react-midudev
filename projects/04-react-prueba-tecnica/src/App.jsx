import "./App.css";
import React, { useEffect, useState } from "react";

const CAT_ENDPOINT_RONDOM_FACT = "https://catfact.ninja/fact";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

function App() {
    const [ fact, setFact ] = useState("");
    const [ imageURL, setImageURL ] = useState("");

    // effect fact
    useEffect(() => {
        fetch(CAT_ENDPOINT_RONDOM_FACT)
            .then(res => {
                if (!res.ok) throw new Error("Error fetching fact");
                return res.json()
            })
            .then(data => {
                const { fact } = data;
                setFact(fact);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    // effect imageURL
    useEffect(() => {
        if (!fact) return;

        const threeFirstWords = fact.split(' ', 3).join(' ');

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res => {
                if (!res.ok) throw new Error("Error fetching image");
                return res.json()
            }) 
            .then(response => {
                const { url } = response;
                setImageURL(url);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [fact]);

    return(
        <main>
            <h1>App de gatitos</h1>
            { fact && <p>{ fact }</p> } 
            { imageURL && <img src={`${CAT_PREFIX_IMAGE_URL}${imageURL}`} alt={`Image extracted using the three first Words for ${fact}`} /> }
        </main>
    );
}

export default App;
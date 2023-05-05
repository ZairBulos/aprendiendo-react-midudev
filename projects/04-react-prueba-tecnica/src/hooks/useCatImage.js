import { useEffect, useState } from "react";
import { getImageURL } from "../services/images.js";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function useCatImage({ fact }) {
    const [ imageURL, setImageURL ] = useState("");

    useEffect(() => {
        getImageURL(fact).then(newImageURL => setImageURL(newImageURL));
    }, [fact]);

    return { imageURL: `${CAT_PREFIX_IMAGE_URL}${imageURL}` };
};
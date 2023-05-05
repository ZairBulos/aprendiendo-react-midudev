export const getImageURL = async (fact) => {
    if (!fact) return;

    const threeFirstWords = fact.split(' ', 3).join(' ');

    const response = await fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`);
    const data = await response.json();
    const { url } = data;
    return url; 
};
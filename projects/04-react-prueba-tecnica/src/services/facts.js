const CAT_ENDPOINT_RONDOM_FACT = "https://catfact.ninja/fact";

export const getRandomFact = async () => {
    const response = await fetch(CAT_ENDPOINT_RONDOM_FACT);
    const data = await response.json();
    const { fact } = data;
    return fact;
};
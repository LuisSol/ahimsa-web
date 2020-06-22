import data from './Quotes.json'

export const getRandomQuote = () => {
    return data[Math.floor(Math.random() * data.length)];
}
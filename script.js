const quotes = [
    {
        name: 'Steven King',
        quote: 'Get busy living or get busy dying.'
    },
    {
        name: 'John F. Kennedy',
        quote: 'Those who dare to fail miserably can achieve greatly.'
    },
    {
        name: 'Abraham Lincoln',
        quote: "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down."
    },
    {
        name: 'Leonardo Da Vinci',
        quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.'
    },
    {
        name: 'Leo Tolstoy',
        quote: 'If you want to be happy, be.'
    },
    {
        name: 'Maya Angelou',
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    },
    {
        name: 'Albert Einstien',
        quote: 'Strive not to be a success, but rather to be of value.'
    },
    {
        name: 'Mark Twain',
        quote: 'The two most important days in your life are the day you are born and the day you find out why.'
    },
    {
        name: 'The Dalai Lama',
        quote: 'Happiness is not something readymade. It comes from your own actions.'
    },
    {
        name: 'Oprah Winfrey',
        quote: 'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.'
    },
    {
        name: 'Theodore Roosevelt',
        quote: 'Believe you can and you\'re halfway there.'
    },
    {
        name: 'John Lennon',
        quote: 'Life is what happens to you while you\'re busy making other plans.'
    },
    {
        name: 'Jack Canfield',
        quote: 'Don\'t worry about failures, worry about the chances you miss when you don\'t even try.'
    },
    {
        name: 'Estee Lauder',
        quote: 'I never dreamed about success, I worked for it.'
    },
    {
        name: 'Florence Nightingale',
        quote: 'I think one\'s feelings waste themselves in words, they ought all be distilled into actions and into actions which bring results.'
    },
    {
        name: 'Martin Luther King',
        quote: 'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.'
    },
    {
        name: 'B.K.S. Iyengar',
        quote: 'Change is not something that we should fear. Rather, it is something that we should welcome. For without change, nothing in this world would ever grow or blossom, and no one in this world would ever move forward to become the person they\'re meant to be.'
    },
    {
        name: 'Eric Paskel',
        quote: 'Yoga is not about tightening your ass. It\'s about getting your head out of it.'
    },
    {
        name: "Unknown",
        quote: 'Yoga takes you into the present moment. The only place where life exists.'
    },
    {
        name: 'Mahatma Gandhi',
        quote: 'The future depends on what we do in the present.'
    },
    {
        name: 'Zen Shin',
        quote: 'A flower does not think of competing to the flower next to it. It just blooms.'
    },
    {
        name: 'Wayne Dyer',
        quote: 'When you judge another, you do not define them, you define yourself.'
    },
    {
        name: 'Baba Ram Dass',
        quote: 'We\'re all just walking each other home.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);
function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}

// const simpleQuotes = [
//     {
//         name: 'author number 1',
//         quote: 'quote number 1'
//     },
//     {
//         name: 'author number 2',
//         quote: 'quote number 2'
//     }
// ]
const quotes = [
    {
        quote: "Success is not final, failure is not fatal: it is the COURAGE TO CONTINUE that counts",
        author : "Winston Churchill",
    },

    {
        quote: "Never ben your head. Always hold it high. Look the world straight in the eye.",
        author: "Helen Keller",
    },
    {
        quote: "What you get by achieving your goals is not as important as what you become by achieving your goals",
        author: "Zig Ziglar",
    },
    {
        quote: "Belive you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote : "When you have a dream.you've got to grab it and never let go",
        author: "Carol Burnett",
    },
    {
        quote : "I can't change the direction of the wind. but I can adjust my sails to always reach my destination.",
        author: "Jimmy Dean",
    },
    {
        quote : "No matter what you're going through, there's a light at the end of the tunnel.",
        author: "Demi Lovato",
    },
    {
        quote : "It is our attitude at the beginning of a difficult task which. more than anything else, will affect its successful outcome",
        author: "William James",
    },
    {
        quote : "Life is like riding a bicycle. To keep your BALANCE. you must keep moving",
        author: "Albert Einstein",
    },
    {
        quote : "Life is like riding a bicycle. To keep your BALANCE. you must keep moving",
        author: "Albert Einstein",
    },
    
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText =  todayQuotes.quote;
author.innerText = todayQuotes.author;
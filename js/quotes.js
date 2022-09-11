const quotes = [
    {
        quote: "친구가 어려울 때 돕기는 쉽지만, 당신의 시간을 친구에게 내주는게 항상 시의적절할 수는 없다.",
        author: "찰리 채플린",
    },
    {
        quote: "역경은 누가 진정한 친구인지 가르쳐준다.",
        author: "로이스 맥마스터 부욜",
    },
    {
        quote: "희망은 어떤 상황에서도 필요하다.",
        author: "사무엘 존슨",
    },
    {
        quote: "웃음은 두 사람간의 가장 가까운 거리다",
        author: "빅터 보르게",
    },
    {
        quote: "웃음 없는 하루는 낭비한 하루다.",
        author: "찰리 채플린",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
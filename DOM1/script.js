// Variables 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [{
    quote: `“My entire life can be summed up in four word: I hustled. I conquered. ”`,
    person: ` Unknown`
}, {
    quote: `“You must either modify your dreams or magnify your skills.”`,
    person: `Jim Rohn`
}, {
    quote: `“What you lack in talent can be made up with desire, hustle and giving 110% all the time.”`,
    person: `Don Zimmer`
}, {
    quote: `“Hustle beats talent when talent doesn't hustle”`,
    person: `Ross Simmonds`
}, {
    quote: `“Some people want it to happen, some people wish it would happen, others make it happen.”`,
    person: `Michael Jordan`
}, {
    quote: `“Entrepreneurship is living a few years of your life like most people won't. So that you can spend the rest of your life like most people can't.”`,
    person: `Unknown`
}, {
    quote: `“The hustle brings the dollar. The experience brings the knowledge. The persistence brings success.”`,
    person: `Ross Simmonds`
}, {
    quote: `“Service and sacrifice are the passwords to the very highest success.”`,
    person: `Napoleon Hill`
}, {
    quote: `“Business opportunities are like buses: there's always another one coming.”`,
    person: `Richard Branson`
}, {
    quote: `“Things may come to those who wait…but only the things left by those who hustle.”`,
    person: `Abraham Lincoln`
}, {
    quote: `“The person who is waiting for something to turn up might start with their shirt sleeves.”`,
    person: `Garth Henrichs`
}, {
    quote: `“If it comes easy, it will go fast.”`,
    person: `Andrena Sawyer`
}, {
    quote: `“Take a leap of faith on your dreams, not for me and not for the society, just for yourself.”`,
    person: `Vinay Garg`
}, {
    quote: `“Those at the top of the mountain didn't fall there.”`,
    person: `Marcus Washling`
}, {
    quote: `“WATCH out for your surroundings, UPGRADE your mindset and keep FOCUS.”`,
    person: `Surgeo Bell`
}, {
    quote: `“All our dreams can come true, if we have the courage to pursue them.”`,
    person: `Walt Disney`
}, {
    quote: `“The struggle you're in today is developing the strength you need for tomorrow. Don’t give up.”`,
    person: `Unknown`
}, {
    quote: `“Be not afraid of going slowly. Be afraid only of standing still.”`,
    person: `Chinese Proverb`
}, {
    quote: ` “Habits are created by repitition and are formed in accordance to a natural law”`,
    person: `Napoleon Hill`
}];

btn.addEventListener('click', function () {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
const string = "The revolution will not be televised.";
console.log(string);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

//embedding javascript
const name ="Chris";
const greeting = `Hello,${name}`;
console.log(greeting);

//for two variables
const one ="Hello";
const two="how are you?"
const joined =`${one}${two}`;
console.log(joined);


const greetig = "Hello";
const nam = "Chris";
console.log(greetig + ", " + nam); 

const greet ="hello";
const per1 ="skippy"
console.log(`${greet}, ${per1}`);

const song ="Fight the Youth";
const score =9;
const highestScore = 10;
const output = `I like the song ${song}. I Gave it a score of ${(score/highestScore)*100}%.`;
console.log(output);

const newline = `one day you finally knew
what you had to do, and began,`;
console.log(newline);

const newline1 ="one day you finally knew\nwhat you had to do,and began,";
console.log(newline1);

//introducing quotes
const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `she said "I'm not going in there!"`;

const bigmouth ='I\'ve got no right to take my place...';
console.log(bigmouth);

const dummy = "Front ";
const number2 = 242;
console.log(dummy + number2);

const myString ="123";
const myNum = Number(myString);
console.log(typeof myNum);

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
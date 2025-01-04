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

let text = "HELLO WORLD";
let char = text.charAt(0);
console.log(char);

const names = "W3Schools";
let letter = names[2];
console.log(letter);

let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(7, 13);
console.log(part);
let part1 = text1.slice(-12);
console.log(part1);

let str2 = "Apple, Banana, Kiwi";
let part3 = str2.substring(7, 13);
console.log(part3);

let str4= "Apple, Banana, Kiwi";
let part4 = str4.substr(7);
console.log(part4);

let text6 = "      Hello World!      ";
let text7 = text6.trim();
console.log(text7);

let text8 = "     Hello World!     ";
let text9 = text8.trimStart();
console.log(text9);

let text10 = "     Hello World!     ";
let text11 = text10.trimEnd();
console.log(text11);

let text14 = "5";
let padded = text14.padStart(4,"x");
console.log(padded);

let text15 = "5";
let padded4 = text15.padEnd(4,"0");
console.log(padded4);

let text16 = "Hello world!";
let result = text16.repeat(2);
console.log(result);

let text17 = "Please visit Microsoft!";
let newText = text17.replace("Microsoft", "W3Schools")
console.log(newText);

function add7(num){
     return num+7;
}

console.log(add7(3));

function multiply(num1,num2){
    return num1*num2;
}
console.log(multiply(5,2));

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
console.log(capitalize("index"));

function lastletter(str){
    return str.charAt(str.length-1);
}
console.log(lastletter("index"));





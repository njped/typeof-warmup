// Challenge 1

let myVar = 100000;
console.log(myVar);

/* 
    Type typeof in console to get the data type of a specific variable
    Also toFixed() and toPrecision() will make the data type a string variable
*/

// Challenge 2

const PI = 3.14159;
const fixedNum = PI.toFixed(3);
const preciseNum = PI.toPrecision(3);
const lightSpeed = 186000;
console.log(fixedNum);
console.log(preciseNum);
console.log(lightSpeed.toExponential());

// Challenge 3

num1 = Math.random().toFixed(1)*30;
num2 = Math.random().toFixed(1)*30;
num3 = Math.random().toFixed(1)*30;
max = Math.max(num1, num2, num3);
console.log(num1, num2, num3);
console.log(max);

// Challenge 4

let s = 'Single';
let d = "Double";
let b = `BackTick`;
let speech = `Martin Luther King said, "I have a dream!"`
console.log(speech);
let tip = `\"We can escape\"`;
console.log(tip);

// Challenge 5

let learn = `I am learning`;
let code = `JavaScript`;
let result1 = learn + ' ' + code;
let result2 = learn.concat(' ' + code);
console.log(result1);
console.log(result2);

// Challenge 6

let byu = `Where is the after party at?`
console.log(byu.toUpperCase())
console.log(byu.slice(13, 24))

// Challenge 7

let currentDate = new Date()
let date = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + '-' + currentDate.getDay();
let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let time = hour + ':' + minutes + ':' + seconds;
console.log(date + ' ' + time);

console.log(
    currentDate.toLocaleDateString(
        'default', {
            weekday: 'long'
        }
    )
);
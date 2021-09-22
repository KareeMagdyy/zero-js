//Exercise 1: 

let numOne = 10;
let numTwo = 20;

console.log(numOne,numTwo);
console.log(`${numOne}${numTwo}`);

console.log(numTwo + "\n" + numOne);
console.log(`${numTwo} 
${numOne}`);



//Exercise 2: 
console.log('\`I\'m In\n \\\\\n Love \\\\\"\"\" \'\'\' \n \+\+ With \+\+ \n \\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"\`\`');



//Exercise 3: 
`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""`



//Exercise 4: 
let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);

// _21_2021_2021_2021_20_



//Exercise 5: 
let cardTittle = 'Elzero',
    cardDesc = 'Elzero Web School',
    cardDate = '25/10';

let cardBody = `<h3>${cardTittle}</h3>
                <p>${cardDesc}</p>
                <span>${cardDate}</span>`;
document.write(cardBody.repeat(4));





/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);


// /*
//   Challenge 2
// */

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(); // 2000
console.log(); // 173





/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * e); // 2000
console.log(++e * ++g + -d + ++f); // 173



let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a,b,c,d)));
console.log(parseInt(Math.min(a,b,c,d)));
console.log(Math.round(Math.min(a,b,c,d)));
console.log(Math.floor(Math.min(a,b,c,d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a,Math.trunc(d))); //10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d));
console.log(parseInt(d));
console.log(Math.trunc(d));
console.log(Math.round(d));

//Use Variables b + d To Get These Values
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)) // 66.67 String
console.log(Math.round(Math.floor(b) / Math.ceil(d))); //67 Number


let theName = '  Ahmed  ';

console.log(theName.trim().charAt(2).toUpperCase());



console.log(1e5); // 100000
console.log(5e4 + 5e4); // 100000
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(100000.0); // 100000
console.log(10 ** 5); // 100000
console.log(Number('100000')); // 100000
console.log(Math.floor(100000.5)); // 100000
console.log(Math.ceil(99999.4)); // 100000
console.log(Math.round(100000.4)); // 100000
console.log(Math.trunc(100000.4)); // 100000
console.log(parseInt(100000.2)); // 100000


console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991


console.log(Math.floor(Number.MAX_SAFE_INTEGER / 559999999999999)); // 16


let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57


let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(flt.toFixed(0)); // 10

let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num));

console.log(Math.floor(Math.random() * 4) +1);

let vName = 'Essam';

console.log(vName.slice(0,1).toLowerCase());
console.log(vName.substring(0,1).toLowerCase());
console.log(vName.substr(0,1).toLowerCase());
console.log(vName.charAt(0).toLowerCase());
console.log(vName[0].toLowerCase().repeat(3));




let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(letterZ.includes('z')); // True
console.log(letterE.startsWith('E')); // True
console.log(letterO.toLowerCase().endsWith('o')); // True






console.log(100 !== "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 !== +"-40"); // true
console.log(! 10 <= -"-40"); // true
console.log(! "10" !== 10); // true
console.log(! 20 == false); // true







let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num1 !== num2); // true
console.log(num2 > num1); // true
console.log(typeof num1 == typeof num2); // true
console.log(!num1 == !num2); // true
console.log(!num1 < num2); // true



let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a + b + a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true


/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
let a = 10;

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
    ? console.log("10 To 40")
    : a > 40 ? console.log("> 40")
      : console.log("Unknown");





let st = "Elzero Web School";

// W Position May Change
if (st.includes("W")) {
  console.log("Good");
}

if (st.length !== "string") {
  console.log("Good");
}

if (typeof st === typeof "number") {
  console.log("Good");
}

if (st.slice(0, 6) + st.slice(0, 6) === "ElzeroElzero") {
  console.log("Good");
}


/*
  Switch Challenge
*/

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}


/*
  Switch Answer
*/
let job = "Manager";
let salary = 0;

switch (job) {
  case 'Manager':
    salary = 8000;
    break;
  case 'IT':
  case 'Support':
    salary = 6000;
    break;
  case 'Developer':
  case 'Designer':
    salary = 7000;
    break;
  default:
    salary = 4000;
}



/*
  If Challenge
*/

let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}


/*
  If Answer
*/
let holidays = 0;
let money = 0;

if (holidays == 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays == 1 || holidays == 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays == 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays == 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}

///////////////////////////////////////

let n = 10;

if (n < 10){
  console.log(`00${n}`);
}else if (n >= 10 && n < 100){
  console.log(`0${n}`)
}else {
  console.log(n)
}


/////////////////////

let num1 = 9;
let str = "9";
let num2 = "20";

if (num1 === str ){
  console.log(`${num1} Is The Same Value As ${str}`);
}else if (num1 == str && num1 !== str ){
  console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
} else if (num1 != num2 || num1 !== num2){
  console.log(`${num1} Is Not The Same Value Or The Same Type As ${num2}`);
}else {
  console.log('Invalid');
}

////////////////////////

let num1 = 10;
let num2 = 30;
let num3 = "30";

if (num3 > num1 && num3 !== num2){
  console.log(`${num3} Is Larger Than ${num1} And Not The Same Type As ${num2}`);
}else if (num3 > num1 && num3 == num2 && num3 !== num2){
  console.log(`${num3} Is Larger Than ${num1} And Value Is The Same As ${num2} And Type Is Not The Same As ${num2}`);
}else if (num3 != num1 && num3 !== num2 ){
  console,log(`${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`);
} else {
  console,log('Invalid');
}


///////////////////////

// Edit What You Want Here

var num1 = 10;
var num2 = 10;
var num3 = "10";
var num4 = 20;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1
var num1 = 12;
var num2 = 10;

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2
var num1 = 15;
var num2 = 10;
var num4 = 20;

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3
var num1 = 11;
var num2 = 10;
var num3 = 11;


if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4
var num1 = 10;
var num2 = 10;
var num4 = 25;

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5
var num1 = 10;
var num3 = 9;
var num4 = 20;

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6
var num1 = 1;
var num2 = 10;
var num3 = 1;
var num4 = 20;

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7
var num1 = 10;
var num2 = 21;
var num3 = 10;
var num4 = 20;

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

//////////////////////


let day = '   blah  ';
let dayTrimer = day.trim();
let days = dayTrimer[0].toUpperCase()+dayTrimer.slice(1);

switch (days){
  case 'Friday': 
  case 'Saturday': 
  case 'Sunday': 
    console.log('No Appointments Available');
    break;
  case 'Monday':
  case 'Thursday':
    console.log('From 10:00 AM To 5:00 PM');
    break;
  case 'Tuesday': 
    console.log('From 10:00 AM To 6:00 PM');
    break;
  case 'Wednesday':
    console.log('From 10:00 AM To 7:00 PM');
    break;
  default:
    console.log('Its Not A Valid Day');
}

////////////////////////


/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero,my.indexOf('Gamal')).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.indexOf('Mazero'), counter).reverse()); // ["Elham", "Mazero"]

console.log(my.splice(zero,my.length,'Elzero'));
console.log(my) // "Elzero"

console.log(my.join().slice(my[my.indexOf('e')]));

console.log(my[my.indexOf("Mazero")][my.indexOf("Gamal")] + my[counter][zero]); // "rO"



////////////////////

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(myFriends.indexOf('Ahmed') , num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(myFriends.indexOf('Gamal'),myFriends.indexOf('Elham'))); 
console.log(myFriends) // ["Ahmed", "Elham", "Osama"];

////////////////

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

console.log(friends.shift(),friends.pop()); 
console.log(friends); // ["Eman", "Osama"]

/////////////////////


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne,arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

///////////////////

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words.length - words.indexOf('Facebook')][0].slice(words.length - words.indexOf('Facebook')).toUpperCase()); // ZERO

///////////////////

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

haystack.includes(needle) ? console.log('Found') : console.log('N/A');
haystack.indexOf(needle) != -1 ? console.log('Found') : console.log('N/A');
haystack.indexOf(needle) >= 0 ? console.log('Found') : console.log('N/A');

///////////////////////

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
//["A", "C", "D", "E", "F", "X", "Y"]

console.log(allArrs.concat(arr1,arr2).sort().slice(arr1.indexOf('C')+arr2.indexOf('Y')).join("").toLowerCase()); // fxy

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar","Sammy"];
let count = 3;
let memberNum = 1;

document.write(`<h2>We Have ${count} Admins</h2> <hr>`);
for (let i = 0; i < count; i++) {
  document.write(`<div>`);
  document.write(`<p>The Admin For Team ${i +1} is ${myAdmins[i]} </p>`);
  document.write(`<h3>Team Members</h3>`);
  for(let k = 0; k < myEmployees.length; k++){
    if(myAdmins[i][0] === myEmployees[k][0]){
      document.write(`<p>- ${memberNum ++} ${myEmployees[k]}</p>`);
    }
  }
  memberNum = 1;
  
  document.write(`</div>`);
  document.write(`<hr>`);
}


///////////
let start = 10;
let end = 100;
let exclude = 40;

//Answer
for (let i = start; i <= end; i += start){
  if (i === exclude){
      continue;
  }
  console.log(i);
}
// Output
10
20
30
50
60
70
80
90
100


let start = 10;
let end = 0;
let stop = 3;

//Answer

for  (let i = start; i >= stop ; i-- ){
  if (i < start){
      console.log(`${end}${i}`);
  } else {
      console.log(i);
  }
}
// Output
10
09
08
07
06
05
04
03

//////////////////////////
let start = 1;
let end = 6;
let breaker = 2;

//Answer
for (let i = start; i <= end; i++){
  console.log(i);
  for (let k = breaker; k <= breaker+breaker; k += breaker){
      console.log(`-- ${k}`);
  }
  
}

// Output
1
-- 2
-- 4
2
-- 2
-- 4
3
-- 2
-- 4
4
-- 2
-- 4
5
-- 2
-- 4
6
-- 2
-- 4

//////////////

let index = 10;
let jump = 2;
let end = 0;

for (;;) {
  // Write Your Code Here
  console.log(index);
    index -= jump;
    if ( index < jump+jump){
      break;
    }
}

// Output
10
8
6
4

/////////////////
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let friendNum = friends.indexOf('Sayed');

for (let i = friends.indexOf('Ahmed'); i < friends.length; i++){
    if (friends[i][friends.indexOf('Ahmed')] === letter.toUpperCase()){
      continue;
    }
    console.log(`${friendNum++} => ${friends[i]}`);
}

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"

///////////////////////
let start = 0;
let swappedName = "elZerO";
let outputStringArray = [];
let outputString = '';
let newChar = '';

for (let i = start; i<swappedName.length; i++){
    if (swappedName[i] == swappedName[i].toUpperCase()) {
      newChar = swappedName[i].toLowerCase();
    }else {
      newChar = swappedName[i].toUpperCase();
    }
    outputString += newChar;
    outputStringArray.push(newChar);
}
console.log(outputString);
console.log(outputStringArray.join(''));

// Output
"ELzERo"
/////////////////////

let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start; i < mix.length; i++){
  if (typeof mix[i] === "string" || mix[i] === 1 ){
    continue
  }
  console.log(mix[i]);
}
// Output
2
3
4
//////////////////////
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;


//While Loop not the best option here.
while(index < friends.length){
    index++;
    if(friends[index][friends.indexOf('Ahmed')] === 'A' || typeof friends[index] === 'number'){
      continue;
    }
    console.log(`${counter += 1} => ${friends[index]}`);
}

//For Loop better option for this example.
for (; index < friends.length; index++){
    if(friends[index][friends.indexOf('Ahmed')] === 'A' || typeof friends[index] === 'number'){
      continue;
    }
    console.log(`${counter += 1} => ${friends[index]}`);
}

// Output
"1 => Sayed"
"2 => Mahmoud"

//////////////////////////////
function sayHello(theName, theGender = '') {
  // Your Code Here
  if (theGender === 'Male') {
  console.log(`Hello Mr ${theName}`)
  } else if (theGender === 'Female') {
  console.log(`Hello Miss ${theName}`)
  } else {
      console.log(`Hello ${theName}`)
  }
}

sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

//////////////
function calculate(firstNum, secondNum = "N/A", operation = 'add') {
  // Your Code Here
  if (secondNum === 'N/A') {
      console.log('Second Number Not Found');
  } else{
      if (operation === 'add'){
          console.log(firstNum + secondNum);
      } else if (operation === 'subtract'){
          console.log(firstNum - secondNum);
      } else if (operation === 'multiply'){
          console.log(firstNum * secondNum);
      } else {
          console.log('Invalid Input')
      }  
  }
  
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

////////////////////////////////
function ageInTime(theAge) {
  // Your Code Here
  const ageMonths = theAge * 12;
  const ageWeeks  = ageMonths * 4;
  const ageDays = theAge * 365.2425;
  const ageHours = ageDays * 24;
  const ageMinutes = ageHours * 60;
  if (theAge > 10 && theAge < 100){
      console.log(`Months Example => ${ageMonths} Months`);
      console.log(`Weeks Example => ${ageWeeks} Weeks`);
      console.log(`Days Example => ${Math.round(ageDays)} Days`);
      console.log(`Hours Example => ${Math.round(ageHours)} Hours`);
      console.log(`Minutes Example => ${Math.round(ageMinutes)} Minutes`);
      console.log(`Seconds Example => ${Math.round(ageMinutes * 60)} Seconds`);
  } else {
      console.log('Age Out Of Range');
  }
}
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
ageInTime(38); // Weeks Example => 1824 Weeks
ageInTime(38); // Days Example => 13879 Days
ageInTime(38); // Hours Example => 333101 Hours
ageInTime(38); // Minutes Example => 19986070 Minutes
ageInTime(38); // Seconds Example => 1199164176 Seconds

//////////////////////
function checkStatus(a, b, c) {
  // Your Code Here
  if (typeof a === 'string' && typeof b === 'number' && typeof c === 'boolean') {
      if (c === true){
          console.log(`Hello ${a}, Your Age Is ${b}, You Are Available For Hire`);
      } else {
          console.log(`Hello ${a}, Your Age Is ${b}, You Are Not Available For Hire`);
      }
  } else if (typeof a === 'number' && typeof b === 'string' && typeof c === 'boolean') {
      if (c === true){
          console.log(`Hello ${b}, Your Age Is ${a}, You Are Available For Hire`);
      } else {
          console.log(`Hello ${b}, Your Age Is ${a}, You Are Not Available For Hire`);
      }
  } else if (typeof a === 'boolean' && typeof b === 'number' && typeof c === 'string'){
      if (a === true){
          console.log(`Hello ${c}, Your Age Is ${b}, You Are Available For Hire`);
      } else {
          console.log(`Hello ${c}, Your Age Is ${b}, You Are Not Available For Hire`);
      }
  } else if (typeof a === 'boolean' && typeof b === 'string' && typeof c === 'number'){
      if (a === true){
          console.log(`Hello ${b}, Your Age Is ${c}, You Are Available For Hire`);
      } else {
          console.log(`Hello ${b}, Your Age Is ${c}, You Are Not Available For Hire`);
      } 
  } else {
          console.log('Invalid Input');
      }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
///////////////////////////

function createSelectBox(startYear, endYear) {
  // Your Code Here
  document.write('<select>');
      for (let i= startYear; i <= endYear; i++) {
          document.write(`<option value="${i}">${i}</option>`);
      }
  document.write('<select>');
}

createSelectBox(2000, 2021);
////////////////////

function multiply(...numbers){
  let result = 1;
  for (let i = 0; i < numbers.length; i++){
      if (typeof numbers[i] === 'number'){
          result *= Math.floor(numbers[i]);
      }
  }
  return `Final Result Is ${result}`;
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
////////////////////

// user, age, rate, show, skills


function showInfo(user = 'Unknown', age = 'Unknown', rate = 0, show = "Yes", ...skills){
  document.write(`<div>`);
  document.write(`<h2>Welcome: ${user}</h2>`);
  document.write(`<p>Age: ${age}</p>`);
  document.write(`<p>Rate: $${rate}`);
  if (show === "Yes"){
      if (skills.length > 0){
          document.write(`<p>Skills: ${skills.join(", ")}</p>`);
      }else{
          document.write(`<p>Skills: No Skills</p>`);
      }
  }else{
      if (skills.length > 0){
          document.write(`<p>Skills: Hidden</p>`);
      }else{
          document.write(`<p>Skills: No Skills</p>`);
      }
  }
  document.write(`</div>`);
}

showInfo('Kareem', 28, 40, 'No', 'HTML', 'CSS', 'JS');
/////////////////////

/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// function names(...n){
//   console.log(`String [${n.join("], [")}] => Done !`);
// }
// names("Osama", "Mohamed", "Ali", "Ibrahim");

let names = (...n) => `String [${n.join("], [")}] => Done !`;
// Parameter ?
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */
// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + parseInt(nums);
// console.log(calc(10, myNumbers[0], myNumbers[1])); // 80

function calc(one, two, ...nums) {
  console.log(one + two + parseInt(nums));
}
calc(10, myNumbers[0], myNumbers[1]);
////////////////

function getDetails(zName, zAge, zCountry) {
  let name = zName.split(" ");
  let age = zAge.split(" ");
  let c = zCountry.split("");
  function namePattern(zName) {
    // Write Your Code Here
    return `${name[0]} ${name[1][0].toUpperCase()}.`;
    // Osama Mohamed => Osama M.
    // Ahmed ali => Ahmed A.
  }
  function ageWithMessage(zAge) {
    // Write Your Code Here
    return `Your Age Is ${age[0]}`;
    // 38 Is My Age => Your Age Is 38
    // 32 Is The Age => Your Age Is 32
  }
  function countryTwoLetters(zCountry) {
    // Write Your Code Here
    return `You Live In ${c[0]}${c[1].toUpperCase()}`;
    // Egypt => You Live In EG
    // Syria => You Live In SY
  }
  function fullDetails() {
    // Write Your Code Here
    return `Hello ${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

////////////////////
let itsMe = () => `Iam A Normal Function`;

console.log(itsMe());

/////////////////////
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org"));

//////////////////
function checker(zName) {
  return function (status) {
    return function (salary) {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Available`;
    };
  };
}

const checker = (zName) => {
  return (status) => {
    return (salary) => {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Available`;
    };
  };
};

const checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Available`;

console.log(checker("Osama")("Available")(4000)); // My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Available
///////////////////////

function specialMix(...data) {
  let result = 0;
  for (let i of data) {
    if (Boolean(parseInt(i))) result += parseInt(i);
  }
  return result || "All Is Strings";
}
/////////////////////////


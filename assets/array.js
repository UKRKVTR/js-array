///////////////ARRAY//////////////////////
let numbArray = [
  Math.trunc(Math.random() * 100),
  Math.trunc(Math.random() * 100),
  Math.trunc(Math.random() * 100),
  Math.trunc(Math.random() * 100),
  Math.trunc(Math.random() * 100),
];
// let numbArray = [1, 2, 3, 4, 5];
console.log(numbArray);
numbArray.pop();
numbArray.push(1);
numbArray.shift();
numbArray.unshift(5);
console.log(numbArray.length);
const numbArray2 = [...numbArray];
console.log(numbArray2);

let numbArray3 = [
  Math.trunc(Math.random() * 100),
  Math.trunc(Math.random() * 100),
  0,
  Math.trunc(Math.random() * 100),
  Math.trunc(Math.random() * 100),
  Math.trunc(Math.random() * 100),
  0,
];

console.log("/////////////////////1/////////////////////////");
console.log(numbArray3);
// let numbArray = [0, 1, 2, 3, 4,5, 6]

for (let i = 0; i < numbArray3.length; i += 2) {
  console.log(numbArray3[i]);
}
let numbArray4 = [...numbArray3];
console.log("/////////////////////2/////////////////////////");
for (let i = 0; i < numbArray4.length; i++) {
  if (numbArray4[i] % 2 === 0) {
    console.log(numbArray4[i]);
  }
}
console.log("/////////////////////3/////////////////////////");
for (let i = 0; i < numbArray3.length; i++) {
  if (numbArray3[i] === 0) {
    console.log(` 0 item on ${i}`);
  }
}
console.log("/////////////////////4/////////////////////////");
let sum = 0;
for (let i = 0; i < numbArray3.length; i++) {
  if (numbArray3[i] === 0) {
    sum += i;
    console.log(`${i}`);
  }
}
console.log(sum);
console.log("/////////////////////Filter/////////////////////////");
let numbArrayFilter = [-1, 5, 0, 9, -10, 0, 0];
function isUpperZero(item) {
  if (item) {
    return item !== 0;
  }
}
let arrWithoutZero = numbArrayFilter.filter(isUpperZero);
console.log(arrWithoutZero);
console.log("/////////////////////Map/////////////////////////");
const numArr = [99, 5, 0, 9, 30];
function changNum(item) {
  return item / 100;
}
const numArr2 = numArr.map(changNum);
console.log(numArr2);
console.log("/////////////////////ForEach/////////////////////////");
const numArrFor = [2, 5, 8, 11];

function numSqr(item) {
  console.log(item ** 2);
}
numArrFor.forEach(numSqr);
console.log("/////////////////////FindIndex/////////////////////////");
const number = [2, 4, 10, 20, 40, 0];

// function sqr100(item) {
//   return item ** 2 === 100;
// }
const sqrNumb = number.findIndex((item) => item * item === 100);
number.splice(sqrNumb, 1);

console.log(number);
console.log(sqrNumb);

console.log("/////////////////////Every/////////////////////////");
let numberArray = [2, 2, 8, 10, 4, 2, 0];
const checkNum = numbArray.every((item) => item % 2 === 0);
console.log(checkNum);

console.log("/////////////////////Some/////////////////////////");
let numberArray2 = [2, 2, 8, 10, -4, 2, 0];

const checkNumber = numberArray2.some((item) => item < 0);
console.log(checkNumber);

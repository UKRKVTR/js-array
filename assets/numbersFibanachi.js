function powNumber(n, x) {
  validateName(n, x);
  if (x === 0) {
    return 1;
  } else {
    return n * powNumber(n, x - 1);
  }
}

function validateName(n, x) {
  if (n <= 0 || x < 0) {
    throw new Error("You use incorrect number");
  } else if (typeof n !== "number" || typeof x !== "number") {
    throw new TypeError("you don`t use Number");
  } else if (x >= 100 || n >= 100) {
    throw new RangeError("Your number so long");
  }
}

try {
  const firstTry = powNumber(3, 3);
  console.log(firstTry);
} catch (error) {
  console.log(error);
}

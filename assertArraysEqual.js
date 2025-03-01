const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }

  console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(actual, expected) {
  if(actual.length !== expected.length) {
    console.log(false);
    return false;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) { 
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("✅ Arrays Match! ");
  } else {
    console.log("❌ Arrays Don't Match");
  }
};



assertArraysEqual([1, 2, 3], [1, 5, 3]); // => should PASS
const tail = function(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (i !== 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};


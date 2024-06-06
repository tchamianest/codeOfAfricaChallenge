const arrayHandles = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === target) return true;
    }
  }
  return false;
};

console.log(arrayHandles([1, 0, 2, 3, 4], 3)); //TRUE CASE
console.log(arrayHandles([1, 0, 2, 3, 4], 8)); //FALSE CASE

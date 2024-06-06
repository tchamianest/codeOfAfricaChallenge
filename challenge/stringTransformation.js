const stringMAnipulation = (str) => {
  const strLength = str.length;
  if (strLength % 3 === 0 && strLength % 5 === 0)
    return str
      .split("")
      .reverse()
      .map((char) => char.charCodeAt(0))
      .join(" ");
  if (strLength % 3 === 0) return str.split("").reverse().join("");
  if (strLength % 5 === 0)
    return str
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  return str;
};

//DIFFERENT TEST RESULT

console.log(stringMAnipulation("banana"));
console.log(stringMAnipulation("pineapple"));
console.log(stringMAnipulation("apple"));
console.log(stringMAnipulation("orange"));

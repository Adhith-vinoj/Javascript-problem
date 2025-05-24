let subString = (str) => {
  let current = "";
  let longest = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (current.includes(str[i])) {
      current = current.slice(current.indexOf(str[i]) + 1);
    }
    current += str[i];
    if (current.length > longest.length) {
      longest = current;
      count++;
    }
  }

  return count;
};

console.log(subString("abcdeabcbb"));

let subArrays = (arr, target) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let temp = [];
    for (j = i; j < arr.length; j++) {
      sum += arr[j];
      temp.push(arr[j]);
      if (sum === target) {
        result.push([...temp]);
      }
    }
  }

  return result;
};

console.log(subArrays([2, 1, 4, 3, 5, 5, 6, 7], 20));

let bracket = (str) => {
  let stack = [];
  for (char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      let last = stack.pop();
      if (
        (char === ")" && last != "(") ||
        (char === "]" && last != "[") ||
        (char === "}" && last != "{")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(bracket("{}"));

let reverseNumber = (arr, arr1) => {
  let result1 = [];
  let result2 = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result1.push(arr[i]);
  }
  for (let j = arr1.length - 1; j >= 0; j--) {
    result2.push(arr1[j]);
  }
  let num = parseInt(result1.join(""));
  let num2 = parseInt(result2.join(""));

  let sum = num + num2;
  return sum;
};
console.log(reverseNumber([2, 3, 4], [5, 6, 7]));

let missingInside = (arr) => {
  let a = arr[0];
  let b = arr[arr.length - 1];
  let missing = [];
  for (i = a; i <= b; i++) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
  }

  return missing;
};

console.log(missingInside([45, 47, 49, 51]));

let numberCount = (arr) => {
  let count = {};
  let maxCount = 0;
  let updateCount;
  for (let i = 0; i < arr.length; i++) {
    const values = arr[i];
    count[values] = (count[values] || 0) + 1;
    if (count[values] > maxCount) {
      maxCount = count[values];
      updateCount = values;
    }
  }

  return updateCount;
};

console.log(numberCount([1, 2, 3, 3, 2, 4, 5, 6, 2]));

let countVowels = (str) => {
  let vowels = "AEIOUaeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};
console.log(countVowels("adhith"));

let reversenumber = (arr, k) => {
  for (i = 0; i < k; i++) {
    let values = arr[arr.length - 1];
    for (j = arr.length - 1; j >= 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = values;
  }
  return arr;
};

console.log(reversenumber([1, 2, 3, 4, 5], 2));



let charBracket = (str) => {
  stack = [];
  for (char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      let last = stack.pop();
    if (
      (char === ")" && last != "(") ||
      (char === "]" && last != "[") ||
      (char === "}" && last != "{")
    ) {
      return false;
    }
  }
  }

  return stack.length === 0;
};

console.log(charBracket("{([{{}}])}"));


let nestedArray = (arr)=>{
  let result = [];
  for(let i = 0; i<arr.length; i++){
    let values = arr[i];
    if(Array.isArray(values)){
       for(let j = 0; j<values.length; j++){
         result.push(values[j])
       }
    }else{
      result.push(values)
    }
  }
  return result;
}

console.log(nestedArray([1,2,3,[4,5],8,7,[6]]))



let reverseContent =(str)=>{
 const values = str.split(" ")
 let result = [];
 for(let i = values.length-1; i>= 0 ;i--){
  result.push(values[i])
 }
 return result.join(" ")
}
console.log(reverseContent("i love you"))



let reverse=(str)=>{
  let result = "";
  for(let i =str.length-1; i>=0; i--){
    result += str[i];
  }
  return result;

}

console.log(reverse("adhith"))


let numberArray=(arr)=>{
  let duplicates = [];
  for(let i =0; i<arr.length; i++){
    for(j = i+1; j<arr.length; j++){
      if(arr[i] === arr[j] && !duplicates.includes(arr[i])){
        duplicates.push(arr[i])
      }
    }
  }

  return duplicates;
}

console.log(numberArray([1,2,3,2,2,4,55,29,55]))
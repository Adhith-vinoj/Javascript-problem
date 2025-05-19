// function isBalanced(str) {
//     const stack = [];

//     for(let char of str){
//         if(char === '(' || char === '[' || char === '{'){
//             stack.push(char);
//         } else if(char === ')' || char === ']' || char ==='}'){
//             const last = stack.pop()
//             if(
//             (char === ')' && last !== '(')
//             (char === ']' && last !== '[')
//             (char === '}' && last !== '{')
//             ){
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }
// console.log(isBalanced("[{]}]"))

// Find Kth Largest Element in an Array
// Input: [3,2,1,5,6,4], k = 2
// Output: 5

// let largestNum = (arr, k)=>{
//     let sorted = arr.sort()
//     for(i = 0; i < sorted.length; i++){
//         return sorted[sorted.length-k]
//     }

// }

// console.log(largestNum([3,2,1,5,6,4], 4))

// let result = (arr,k)=>{
//       arr.sort((a,b)=> b - a)
//       return arr[k-1]
// }
// console.log(result([1,3,5,2,4,6], 2))
// // [6,5,4,3,2,1]

let subString = (str) => {
  let current = "";
  let longest = "";
  for (i = 0; i < str.length; i++) {
    if (current.includes(str[i])) {
      current = current.slice(current.indexOf(str[i]) + 1);
    }
    current += str[i];

    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
};

console.log(subString("abcabcbb"));

let longestSubstring = (str) => {
  let current = "";
  let longest = "";
  let count = 0;
  for (i = 0; i < str.length; i++) {
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

console.log(longestSubstring("abcdeabcbb"));

let brackerBalanced = (str) => {
  let stack = [];
  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      const last = stack.pop(stack);
      if ( 
        (char === ")" && last != "(") ||
        (char === "]" && last != "[") ||
        (char === "}" && last != "{")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0
};
console.log(brackerBalanced("{(())}"));



let longestSubstrings= (str)=>{
  let current = "";
  let longest = "";
  for(i = 0; i < str.length; i++){
    if(current.includes(str[i])){
      current = current.slice(current.indexOf(str[i]) +1)
    }
    current += str[i];

    if(current.length > longest.length){
      longest = current;
    }

  }
 
return longest;
}

console.log(longestSubstrings("abcdabcbb"));






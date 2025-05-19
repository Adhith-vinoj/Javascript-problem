// function romanToInt(s){
//     const romanMap={
//         'I':1,
//         'v':5,
//         'x':10,
//         'L':50,
//         'C':100,
//         'D':500,
//         'M':100
//     }

//     let total=0

//     for(let i=0;i<s.length;i++){
//         let current=romanMap[s[i]]
//         let next=romanMap[s[i+1]]
        

//         if(next>current){
//             total+=(next-current)
//             i++
//         }else{
//             total+=current
//         }

//     }
//     return total
// }







function intToRoman(num) {
    const romanMap = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let result = "";

    for (let i = 0; i < romanMap.length; i++) {
        while (num >= romanMap[i].value) {
            result += romanMap[i].symbol; // Append the Roman numeral
            num -= romanMap[i].value; // Reduce the number
        }
    }

    return result;
}

// Example usage:
console.log(intToRoman(3));    // Output: "III"
console.log(intToRoman(9));    // Output: "IX"
console.log(intToRoman(58));   // Output: "LVIII"
console.log(intToRoman(1994)); // Output: "MCMXCIV"


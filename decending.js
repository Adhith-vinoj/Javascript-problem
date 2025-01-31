let decending = (arr)=>{
    let number = arr.sort((a, b) => b - a);
   return number;
    
}

let decendingOrder = [1,2,3,4,5,6,7,8];

console.log(decending(decendingOrder));

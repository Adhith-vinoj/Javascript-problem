// function maxProductSub(arr){
//     let maxProduct=arr[0]
//     let minProduct=arr[0]
//     let result=arr[0]


//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<0){
//             [maxProduct,minProduct]=[minProduct,maxProduct]
//         }

//         maxProduct=Math.max(arr[i],maxProduct*arr[i])
//         minProduct=Math.min(arr[i],minProduct*arr[i])


//         result=Math.max(result,maxProduct)
//     }
//     return result
// }


// console.log(maxProductSub([2, 3, -2, 4]));




function maxProduct(arr){
    const n=arr.length

    let result =arr[0]

    for(let i=0;i<n;i++){
        let mul=1

        for(let j=i;j<n;j++){
            mul*=arr[j]



            if(mul>result)
                result=mul
        }
    }
    return `${result}`
}

const arr = [-2, 6, -3, -10, 0, 2];
console.log(maxProduct(arr))




//////////]]]]///////

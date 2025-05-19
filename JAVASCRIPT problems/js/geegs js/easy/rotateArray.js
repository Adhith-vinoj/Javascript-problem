// function leftRotate(arr,d){
//     let n=arr.length
//     d=d%n


//     for(let i=0;i<d;i++){
//         let temp=arr[0]

//         for(let j=0;j<n-1;j++){
//             arr[j]=arr[j+1]
//         }
//         arr[n-1]=temp
//     }
//     return arr
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let d = 2;
// console.log(leftRotate(arr, d));



// function leftRotate(arr,d){
//     let n=arr.length

//     for(let i=0;i<d;i++){
//         let temp=arr[0]

//         for(let j=0;j<n-1;j++){
//             arr[j]=arr[j+1]
//         }
//         arr[n-1]=temp
//     }
//     return arr
// }
// let arr=[1,2,3,4,5,6,7]
// let d=2
// console.log(leftRotate(arr,d))



//]

function rotateLeft(att,d){
    for(let i=0;i<d;i++){
        let firstElement=att.shift()
        att.push(firstElement)
    }
    return att
}

let aray=[1,2,3,4,5,6,7]
console.log(rotateLeft(aray,2))

///]]]]]





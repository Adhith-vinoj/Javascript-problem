// function waveForm(arr){
//     let n=arr.length

//     arr.sort((a,b)=>a-b)

//     for(let i=0;i<n-1;i+=2){
//         let temp=arr[i]
//         arr[i]=arr[i+1]
//         arr[i+1]=temp
//     }
//     return arr
// }

// let arr = [3, 6, 5, 10, 7, 20];
// console.log(waveForm(arr));
// ///[]]

function waveSortOptimized(arr){
    let n=arr.length

    for(let i=0;i<n;i+=2){
        if(arr[i]<arr[i-1]){
            let temp=arr[i]
            arr[i]=arr[i-1]
            arr[i-1]=temp
        }


        if(arr[i]<arr[i+1]){
            let temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
        }
    }
    return arr
}

let arr2 = [3, 6, 5, 10, 7, 20];
console.log(waveSortOptimized(arr2))


function circularSum(arr){
    const n=arr.length
    let res=arr[0]


    for(let i=0;i<n;i++){
        let currSum=0


        for(let j=0;j<n;j++){
            const idx=(i+j)%n
            currSum+=arr[idx]
            res=Math.max(res,currSum)
        }
    }
    return res
}
const arr = [8, -8, 9, -9, 10, -11, 12];
console.log(circularSum(arr));









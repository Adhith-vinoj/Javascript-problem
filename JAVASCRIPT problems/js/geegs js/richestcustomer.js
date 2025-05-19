// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

 


function richestCustomer(arr){
    let result=[]
    let maximum=0

    for(let i=0;i<arr.length;i++){
        let sum=0

        for(let j=0;j<arr[i].length;j++){
            sum+=arr[i][j]
        }
        result.push(sum)
        for(let k=0;k<result.length;k++){
            if(result[i]>maximum){
                maximum=result[i]
            }
        }

    }
    return maximum
}
let arr=[[1,2],[1,3],[1,4]]
console.log(richestCustomer(arr))
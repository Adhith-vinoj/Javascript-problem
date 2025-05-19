// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

 


function baseball(operation){
    let stack=[]


    for(let op of operation){
        if(!isNaN(op)){
            stack.push(parseInt(op))
        }else if(op==="+"){
            let last=stack[stack.length-1]
            let secondLast=stack[stack.length-2]
            stack.push(last+secondLast)
        }else if(op ==="D"){
            let last =stack[stack.length-1]
            stack.push(last*2)
        }else if(op==="C"){
            stack.pop()
        }
    }
    let finalSum=0
    for(let i=0;i<stack.length;i++){
        finalSum+=stack[i]
    }
    return finalSum
}
console.log(baseball(["5", "2", "C", "D", "+"]));



//]/]



















////]]]
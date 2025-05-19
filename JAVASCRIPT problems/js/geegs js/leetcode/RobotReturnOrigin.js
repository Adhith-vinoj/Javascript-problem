// There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

// Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

// Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

 



// function originRobot(arr){
//     let L=-1
//     let R=1
//     let U=1
//     let D=-1
//     let sum=0

//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//         if(sum!==0){
//             return false
//         }
//     }
//     return true

// }
// console.log(originRobot(["U","D"]))




function originRobot(arr){
    let x=0,y=0

    for(let i=0;i<arr.length;i++){
        if(arr[i]==="U"){
            y+=1
        }else if(arr[i]==="D"){
            y-=1
        }else if(arr[i]==="L"){
            x-=1
        }else if(arr[i]==="R"){
            x+=1
        }
    }
    return x===0&&y===0
}
console.log(originRobot(["U", "L"]));


/////]
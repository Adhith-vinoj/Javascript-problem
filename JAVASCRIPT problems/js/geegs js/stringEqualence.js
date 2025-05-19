function canShifttogoal(s,goal){
    if(s.length!==goal.length)return false
    let n=s.length

    for (let i=0;i<n;i++){
        s=rotateLeft(s)
        if(s===goal)return true
    }
    return false
}


function rotateLeft(str){
    let rotate=""

    for(let i=1;i<str.length;i++){
        rotate+=str[i]
    }
    rotate+=str[0]
    return rotate
}


console.log(canShifttogoal("abcde", "cdeab")); // Output: true
console.log(canShifttogoal("abcde", "abced")); 






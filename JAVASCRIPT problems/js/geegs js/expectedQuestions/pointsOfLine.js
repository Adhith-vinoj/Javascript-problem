// function arePointsCollinear(points){
//     for(let i=2;i<points.lenght;i++){
//         let [x1,y1]=points[0]
//         let [x2,y2]=points[1]
//         let [x3,y3]=points[i]


//         if((x2-x1)*(y3-y1)!==(y2-y1)*(x3-x1)){
//             return false
//         }
//     }
//     return true
// }

// let points=[[1,2],[3,4],[5,6]]
// console.log(arePointsCollinear(points))





function star(num){
    let result=''
    for(let i=0;i<num;i++){
        let line=''
        for(let j=0;j<num-i;j++){
            line+=' '

        }
        for(let k=0;k<i*2-1;k++){
            line+='*'
        }
        result+=`${line}\n`
    }
    return result
}
console.log(star(4))










  
let areaRectangle = (length, breadth)=>{
    let area = length * breadth;
    return area;
}
console.log(areaRectangle(2, 2));

// test case
 
let testRect = () =>{

    let input = [
         [2, 2],
         [3, 6],
         [1, 7],
        
        ];

     let output = [
         4,
         18,
         21,
         
     ];
      
     for(i = 0; i < input.length; i++){
        let num = areaRectangle(input[i][0], input[i][1]);
        if(num === output[i]){
            console.log(`test ${i+1} passed`);
        } else {
            console.log(`test ${i+1} failed`);

        }
     }

};

testRect();

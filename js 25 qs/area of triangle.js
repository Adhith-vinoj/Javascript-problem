// write a program to calculate the area of a triangle given its base and height

let areaTriangle = (base , heigth)=>{
    let triangle = base * heigth / 2;
    return triangle;
}

console.log(areaTriangle(4,4));

// test case

let value = () =>{
    let input = [
        [4, 4],
        [5, 10],
        [0, 10],
    ];

    let output = [
        8,
        25,
        6
    ];

    for(let i = 0; i < input.length; i++) {
        let number = areaTriangle(input[i][0], input[i][1]);
        if(number === output[i]){
            console.log(`test ${i+1} passed`);
        }else {
            console.log(`test ${i+1} failed`)
        }
    }
};

value();

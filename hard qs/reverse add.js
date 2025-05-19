



// reverse order and adding the two array----------------------------------
let ReverseOrder = (arr1, arr2) => {

    
    let number = [];
    let number1 = [];
    
    for(i = arr1.length -1; i >= 0; i--){
        number.push(arr1[i])
    }

    for(j =  arr2.length -1; j >= 0; j--){
        number1.push(arr2[j])
    }


     let num = parseInt(number.join(""));
     let num2 = parseInt(number1.join(""));

     let sum = num + num2;
     return sum;
}

console.log(ReverseOrder([2, 3, 4, 6], [5, 4, 1, 2]));



// fibanocci numbers---------------------------------

let fibanocci = (num) => {
    let a = 0;
    let b = 1;
    let result = [];
    for(i = 0; i < num; i++){
        result.push(a);
        let next = a + b;
        a = b;
        b = next;
    }
    return result;
}

console.log(fibanocci(10))


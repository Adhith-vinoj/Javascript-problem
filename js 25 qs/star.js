let pyramid = (n) => {


    for(let i = 1; i <=n; i++){
        let space = " ".repeat(n - i);
        let stars = "*".repeat(2 * i - 1)
        console.log(space + stars )
    }
}
pyramid(5);

// let name1=()=>{
// let array1 = ["adhith", "anamkika"];

// let consume = array1.map(name  => name.toUpperCase());

// return consume;
// }

// console.log(name1())
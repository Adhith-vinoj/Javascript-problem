// calculate the factorial of a given number


// let factorial = (n)=>{
//     let result = 1;
//     for(i = 1; i <= n; i++){
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(7));



// let testCase = () =>{
//     let input = [ 1, 2, 3,];
//     let output = [
//         1,
//         2,
//         6
//     ];

//     for(let i = 0; i < input.length;i++){
//         let number = factorial(input[i]);
//         if(number === output[i]){
//            console.log(`test ${i+1} passed`)
//         }else{
//             console.log(`test${i+1}failed`)
//         }
//     }
// }
// testCase();





const promise1 = new Promise((resolve, reject) => {

    resolve(["Javascript", "HTML"])

});


// const promise2 = new Promise((resolve, reject) =>{
//     resolve(["react, angular"])
// })

promise1.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

// promise2.then((res) =>{
//     console.log(res);
    
//  })

// const allPromises = Promise.all([promise1,promise2]);

// allPromises.then((res) =>{
// console.log(res.flat(Infinity));

// }).catch((err) =>{
//     console.log(err)
// })


// const promise1 = new Promise((resolve, reject) => {

    // resolve(["Javascript", "HTML"])
    // reject("api failed")

// });

// const fetch = async() =>{
//     try {
//     const response = await promise1
//     console.log(response);
//     } catch (error) {
//         console.log(error)
//     }

// };
// fetch()


//   const fetching = async() =>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log(data)
//   }

//   fetching()


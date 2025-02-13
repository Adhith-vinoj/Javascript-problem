// write a program that return the transpose of a given matrix

let transpose = (matrix)=>{
    let rows = matrix.length;
    let cols = matrix[0].length;

    let transNumber = [];

    for (let i = 0; i < cols; i++){
        transNumber[i] = [];
        for( let j = 0; j < rows; j++){
            transNumber[i][j] = matrix[j][i];
        }
    }

    return transNumber;

}
let matrix =[
             [1,2,3],
             [4,5,6],
             [7,8,9] 
                    ];
                    
   console.log(transpose(matrix));       

   
   
let testCae = ()=>{
    let input = [
        [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
        ],

        [
            [1, 2],
            [3, 4]
        ],

        [
            [1, 2, 3, 4],
            [5, 6, 7, 10]
        ]
    ];

    let output = [
        [
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]
        ],
        [
            [1, 3],
            [2, 4]
        ],
        [
            [1, 5],
            [2, 6],
            [3, 7],
            [4, 8]
        ]
      
    ];

    for(let i = 0; i < input.length; i++){
        let result = transpose(input[i]);
        if(result.toString() === output[i].toString()){
            console.log(`test ${i+1}passed`);
        }else{
            console.log(`test ${i+1}failed`);
        }
    }
};
testCae();

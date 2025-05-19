function occurence(arr,ele){
    let occ=0

    for(let i=0;i<arr.length;i++){
        if(arr[i]==ele){
            // arr[occ]=arr[i]
            occ++
        }
    }
    return occ
}
const arr = [0, 1, 3, 0, 2, 2, 4, 2];
const ele = 2;
console.log(occurence(arr, ele));
function countWords(str){

  let arr=str.trim().split(/\s+/)
  let maxcount=0
  let word=''
  let sent=arr.join()
  let result=''

  // for(let char of sent){
  //   result+=(char===',')?' ':char
  // }
  for(let char of sent){
    result+=(char===',')?' ':char
  }
  
  for(let i=0;i<arr.length;i++){
      let count=0
     
    for(let j=0;j<arr.length;j++){
        if(arr[i]===arr[j]){
            count++
            word=arr[i]
        }
        if(count>maxcount){
            maxcount=count
        }
    }
  }
  return `${maxcount} ${word} ${result}`
}

console.log(countWords(" Hello in world! This is JavaScript in. "))

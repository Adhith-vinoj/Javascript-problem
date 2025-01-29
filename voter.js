// check the given age is eligible for votting

function age(num){
   if(num > 18 || num == 18){
      return "eligible for votting"
   }else if(num < 18){
    return "not eligible for votting"
   }

   
}

console.log(age(18));


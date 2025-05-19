// You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

// A triangle is called equilateral if it has all sides of equal length.
// A triangle is called isosceles if it has exactly two sides of equal length.
// A triangle is called scalene if all its sides are of different lengths.
// Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle.





function triangleType(a,b,c){
    if(a==b&&a==c&&b==c){
        return 'equilateral'
    }else if(a!==b&&b!==c&&a!==c){
        return 'scalene'
    }else{
        return 'isoceles'
    }
}
console.log(triangleType(3,3,3))


/////]]]]]]
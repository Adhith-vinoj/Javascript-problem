//Given an array prices[] of length N, representing the prices of the stocks on different days, the task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell.





function maxProfit(prices){
    let minPrice=Infinity
    let maxProfit=0
    let maxPrice=0

    for(let price of prices){
        minPrice=Math.min(minPrice,price)
        maxPrice=Math.max(maxPrice,price)
        maxProfit=maxPrice-minPrice
    }
    return maxProfit
}


let prices=[7, 1, 5, 3, 6, 4]

console.log(maxProfit(prices))








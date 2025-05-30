//Given an array prices[] of size n denoting the cost of stock on each day, the task is to find the maximum total profit if we can buy and sell the stocks any number of times.

//Note: We can only sell a stock which we have bought earlier and we cannot hold multiple stocks on any day.



function maxProfit(prices){
    let maxProfit=0

    for(let i=1;i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            maxProfit+=prices[i]-prices[i-1]
        }
    }
    return maxProfit
}

const prices = [100, 180, 260, 310, 40, 535, 695];

console.log(maxProfit(prices))



//////]]]]




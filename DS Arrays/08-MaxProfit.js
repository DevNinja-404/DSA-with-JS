// MaxProfit
/* Imagine you're buying and selling stocks throughout the year.Your job is to find the biggest profit you could make by buying low and selling high only once

Here's what u r given :
A list of stock prize for each day is : [7,1,5,3,6,4]

Here's what u need to find out :
the difference between the cheapest price u could have bought the stock and the most expensive price you could have sold it later on.

*/

const maxProfit = (stockPrizeList) => {
  let minPrice = stockPrizeList[0],
    maxProfit = 0;
  for (let i = 1; i < stockPrizeList.length; i++) {
    const currentPrize = stockPrizeList[i];
    minPrice = Math.min(minPrice, currentPrize);

    const potentialProfit = currentPrize - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
};

console.log(`The maxProfit is ${maxProfit([7, 1, 5, 3, 6, 4])}.`);

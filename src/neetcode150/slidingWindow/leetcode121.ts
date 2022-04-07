function maxProfit(prices: number[]): number {
  let profit = 0;
  let minimumBuy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    minimumBuy = Math.min(minimumBuy, prices[i]);
    profit = Math.max(profit, prices[i] - minimumBuy);
  }

  return profit;
}

export default maxProfit;

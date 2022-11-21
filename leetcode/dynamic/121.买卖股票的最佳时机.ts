// 题目地址：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock

/**
 * 解题思路：简单动态规划：以最低的价格购买，以最高的价格抛出，算出当前价格与后续价格的最大差
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 */
function maxProfit(prices: number[]): number {
    const dp = new Array(prices.length).fill(0);
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        // 找到最低价格
        minPrice = Math.min(minPrice, prices[i]);

        // 与之前比较收益，找到最大收益
        dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
    }

    return dp[prices.length - 1];
}

function maxProfit1(prices: number[]): number {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
}

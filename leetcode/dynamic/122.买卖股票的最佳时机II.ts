// 题目地址：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * 解题思路：动态规划
 * 到达 dp[i] 时能获得的最大利润为多少, 每天都能卖，只要求出每天的最大利润，叠加
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 */
function maxProfit2(prices: number[]): number {
    const dp = new Array(prices.length).fill(0);

    for (let i = 1; i < prices.length; i++) {
        // 每一天的利润
        const profit = prices[i] - prices[i - 1];

        if (profit > 0) {
            dp[i] = dp[i - 1] + profit;
        } else {
            dp[i] = dp[i - 1];
        }
    }
    return dp[prices.length - 1];
}

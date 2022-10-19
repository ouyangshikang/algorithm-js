/**
 * 题目地址：https://leetcode.cn/problems/fibonacci-number/
 * 解题思路1：递归解决, 添加缓存
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
function fib1(n: number): number {
    const cache = [0, 1];
    const dfs = (n: number): number => {
        if (n <= 1) {
            return n;
        }

        if (cache[n]) {
            return cache[n];
        }

        cache[n] = dfs(n - 1) + dfs(n - 2);
        return cache[n];
    };

    return dfs(n);
}

/**
 * 解题思路2：动态规划(递推公式)
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
function fib2(n: number): number {
    let dp = [0, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

/**
 * 动态规划代码优化(数组优化为2个变量)
 */
function fib3(n: number): number {
    if (n <= 1) {
        return n;
    }

    let prev = 0;
    let current = 1;

    for (let i = 2; i <= n; i++) {
        const sum = prev + current;
        prev = current;
        current = sum;
    }

    return current;
}

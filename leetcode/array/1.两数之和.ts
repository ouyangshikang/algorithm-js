/**
 * 题目地址: https://leetcode.cn/problems/two-sum/
 * 解题思路1: 双循环暴力解决
 * 时间复杂度: O(n^2)
 * 空间复杂度: O(1)
 */

function twoSum1(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

/**
 * 解题思路2: 利用 HashMap 进行记录
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
function twoSum2(nums: number[], target: number): number[] {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const nextNum = target - currentNum;
        if (map.has(nextNum)) {
            return [i, map.get(nextNum)];
        }
        map.set(currentNum, i);
    }

    return [];
}

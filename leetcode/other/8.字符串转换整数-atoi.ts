// 题目地址：https://leetcode.cn/problems/string-to-integer-atoi/

/**
 * 解题思路：利用正则表达式匹配
 */
function myAtoi(s: string): number {
    const matchArr = s.trim().match(/^[-+]?\d+/g);

    const result = matchArr ? +matchArr[0] : 0;

    if (result >= 0) {
        return Math.min(result, 2 ** 31 - 1);
    } else {
        return Math.max(result, -(2 ** 31));
    }
}

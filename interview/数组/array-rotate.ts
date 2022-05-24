/**
 * 题目：
 * 输入一个数组 [1, 2, 3, 4, 5, 6, 7]
 * k = 3，即旋转 3 步
 * 输出 [5, 6, 7, 1, 2, 3 ,4]
 *
 * 解题思路：数组拆分，concat 拼接到一起
 * 时间复杂度：n
 * 空间复杂度：1
 */

export function rotateArray(arr: number[], k: number): number[] {
    const length = arr.length;
    if (!k || length === 0) return arr;

    const spliceIndex = length - (k % length);
    const tempArr = arr.splice(spliceIndex, k);
    return tempArr.concat(arr);
}

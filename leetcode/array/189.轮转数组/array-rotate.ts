/**
 * 题目：
 * 输入一个数组 [1, 2, 3, 4, 5, 6, 7]
 * k = 3，即旋转 3 步
 * 输出 [5, 6, 7, 1, 2, 3 ,4]
 *
 */

/**
 * 解题思路: 数组末尾pop, 头部 unshift
 * 时间复杂度: n^2
 * 空间复杂度: 1
 */
export function rotateArray1(arr: number[], k: number): number[] {
    const length = arr.length;
    if (!k || length === 0) return arr;
    const step = Math.abs(k % length);

    // O(n^2)
    for (let i = 0; i < step; i++) {
        const n = arr.pop();
        if (n != null) {
            arr.unshift(n); // 数组是一个有序结构，unshift 操作非常慢！！！ O(n)
        }
    }
    return arr;
}

/**
 * 解题思路：数组拆分，concat 拼接到一起
 * 时间复杂度：1
 * 空间复杂度：n
 */

export function rotateArray2(arr: number[], k: number): number[] {
    const length = arr.length;
    if (!k || length === 0) return arr;

    // splice (改变原数组)
    // const spliceIndex = length - (k % length);
    // const tempArr = arr.splice(spliceIndex, k);
    // // return arr.unshift(...tempArr);
    // return arr.splice(0, 0, ...tempArr);

    // slice (不改变原数组)
    const step = Math.abs(k % length);
    const part1 = arr.slice(-step);
    const part2 = arr.slice(0, length - step);
    return part1.concat(part2);
}

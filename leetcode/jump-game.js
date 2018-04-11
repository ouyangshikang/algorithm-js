/**
    给定一个非负整数数组，您最初位于数组的第一个索引处。

    数组中的每个元素表示您在该位置的最大跳跃长度。

    确定是否能够到达最后一个索引。

    示例：
    A = [2,3,1,1,4]，返回 true。

    A = [3,2,1,0,4]，返回 false。
 */

 /**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
    const numsLen = nums.length;
    // 当前能跳的最远距离，初始为0
    let maxIndex = 0;
    for (let i = 0; i < numsLen; i++) {
        if (maxIndex < i|| maxIndex >= numsLen - 1) {
            break;
        }
        maxIndex = Math.max(maxIndex, i + nums[i]);
    }
    return maxIndex >= numsLen - 1;
};

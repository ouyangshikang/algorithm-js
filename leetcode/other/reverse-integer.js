/**
    给定一个范围为 32 位 int 的整数，将其颠倒。

    例 1:
    输入: 123
    输出:  321

    例 2:
    输入: -123
    输出: -321

    例 3:
    输入: 120
    输出: 21

    注意:
    假设我们的环境只能处理 32 位 int 范围内的整数。根据这个假设，如果颠倒后的结果超过这个范围，则返回 0
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var max = Math.pow(2, 31);
    var tmp = Math.abs(x);
    var result = 0;
    if (tmp >= 0 && tmp <= max) {
        var arr = tmp.toString().split('');
        var len = arr.length;
        for (let i = 0; i < len; i++) {
            result += arr[i] * Math.pow(10, i);
        }
        if (result <= max) {
            return x <= 0 ? -result : result;
        } else {
            return 0;
        }
    }
};

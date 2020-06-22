/**
 * 题目地址: https://leetcode-cn.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    let stack = [];
    const left = ['(', '{', '['];
    const right = [')', '}', ']'];

    for(let i = 0; i < s.length; i++) {
        const curStr = s[i];

        if(left.includes(curStr)) {
            stack.push(curStr);
        }
        else if(right.includes(curStr)) {
            const popStr = stack.pop();

            if(
                !popStr ||
                (popStr === '(' && curStr !== ')') ||
                (popStr === '{' && curStr !== '}') ||
                (popStr === '[' && curStr !== ']')
            ) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
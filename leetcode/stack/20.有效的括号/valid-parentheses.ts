/**
 * 题目地址: https://leetcode-cn.com/problems/valid-parentheses/
 * 解题思路：栈的方式，左括号入栈，右括号匹配则出栈，最后判断栈的长度是否为0
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */

export function isValid(s: string): boolean {
    const stack: string[] = [];
    const leftSymbols = '({[';
    const rightSymbols = ')}]';

    for (let i = 0; i < s.length; i++) {
        const curStr = s[i];

        if (leftSymbols.includes(curStr)) {
            // 左括号入栈
            stack.push(curStr);
        } else if (rightSymbols.includes(curStr)) {
            // 右括号若匹配则出栈
            const top = stack[stack.length - 1];
            if (
                (top === '(' && curStr === ')') ||
                (top === '{' && curStr === '}') ||
                (top === '[' && curStr === ']')
            ) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
}

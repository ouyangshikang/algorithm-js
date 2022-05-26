/**
 * 题目地址: https://leetcode.cn/problems/implement-queue-using-stacks/
 * 解题思路: 用 2 个栈实现队列
 * 时间复杂度:
 * - push: O(1)
 * - pop: O(n)
 * 空间复杂度: 整体是 O(n)
 */
export class MyQueue {
    constructor() {}

    private stack1: number[] = [];
    private stack2: number[] = [];

    // 入队
    push(x: number): void {
        this.stack1.push(x);
    }

    // 出队
    pop(): number | null {
        const { stack1, stack2 } = this;
        // 将stack1 的所有元素移动到 stack2
        while (stack1.length) {
            const s1 = stack1.pop();
            if (s1) {
                stack2.push(s1);
            }
        }
        // 将 stack2 第一个元素出队
        const result = stack2.pop();

        // 将 stack2 的其余元素放回 stack1
        while (stack2.length) {
            const s2 = stack2.pop();
            if (s2) {
                stack1.push(s2);
            }
        }

        return result || null;
    }

    // 返回队列开头的元素
    peek(): number {
        return this.stack1[0];
    }

    // 判断队列是否为空
    empty(): boolean {
        return this.stack1.length === 0;
    }
}

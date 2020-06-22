/**
 * 题目地址: https://leetcode-cn.com/problems/min-stack/
 */
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.length = 0;
    }

    push(x) {
        this.stack[this.length] = x;

        const min = this.getMin();
        if(x < min || min === undefined) {
            this.minStack[this.length] = x;
        }
        else {
            this.minStack[this.length] = min;
        }

        this.length++;
    }

    pop() {
        this.stack.length = --this.length;
        this.minStack.length = this.length;
    }

    top() {
        return this.stack[this.length - 1];
    }

    getMin() {
        return this.minStack[this.length -1];
    }
}
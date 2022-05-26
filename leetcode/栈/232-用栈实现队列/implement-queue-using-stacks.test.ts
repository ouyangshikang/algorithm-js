import { MyQueue } from './implement-queue-using-stacks';

describe('用2个栈实现队列', () => {
    it('push', () => {
        const queue = new MyQueue();
        queue.push(1);
        queue.push(2);
        expect(queue.peek()).toBe(1);
        expect(queue.empty()).toBeFalsy();
    });

    it('pop', () => {
        const queue = new MyQueue();
        queue.push(100);
        queue.push(200);
        expect(queue.peek()).toBe(100);
        expect(queue.pop()).toBe(100);
        expect(queue.pop()).toBe(200);
        expect(queue.pop()).toBeNull();
        expect(queue.empty()).toBeTruthy();
    });
});

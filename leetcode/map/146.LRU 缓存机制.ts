// 题目地址：https://leetcode.cn/problems/lru-cache

/**
 * 解题思路：
 *  - 用hash 来 存储数据，这样 get put 时间复杂度 O(1)
 *  - 必须有序，可以利用 Map 来实现
 */
class LRUCache {
    constructor(capacity: number) {
        if (capacity < 1) throw new Error('invalid capacity');
        this.capacity = capacity;
    }

    private caches = new Map<number, number>();
    private capacity: number;

    get(key: number): number {
        const value = this.caches.get(key);
        if (value === undefined) {
            return -1;
        }

        this.caches.delete(key);
        this.caches.set(key, value);

        return value;
    }

    put(key: number, value: number): void {
        const { caches } = this;
        if (caches.has(key)) {
            caches.delete(key);
        }

        caches.set(key, value);

        if (caches.size > this.capacity) {
            // 删除 Map 里，最近最少使用的元素
            const lruKey = caches.keys().next().value;
            caches.delete(lruKey);
        }
    }
}

// 题目地址：https://leetcode.cn/problems/reverse-linked-list/

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

/**
 * 解题思路：
 *  - 遍历链表，节点 next 指向前一个节点
 *  - 需要 3 个指针(prevNode, currentNode, nextNode)
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * @param head 单链表头节点
 */
function reverseList(head: ListNode | null): ListNode | null {
    let prevNode = null;
    let currentNode = head;

    while (currentNode) {
        const nextNode = currentNode.next;

        currentNode.next = prevNode;

        prevNode = currentNode;
        currentNode = nextNode;
    }

    return prevNode;
}

// https://leetcode.cn/problems/kth-smallest-element-in-a-bst/

interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

/**
 * 解题思路：通过中序遍历(迭代)，得到从小到大的排序
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
function kthSmallest(root: TreeNode | null, k: number): number {
    let stack = [];
    let result = [];

    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }

        const node: TreeNode = stack.pop()!;
        result.push(node.val);
        root = node.right;
    }
    return result[k - 1];
}

/**
 * 解题思路：通过中序遍历(递归)，得到从小到大的排序
 */
function kthSmallest2(root: TreeNode | null, k: number): number {
    const result: number[] = [];

    const traversal = (node: TreeNode | null) => {
        if (node === null) return;
        traversal(node.left);
        result.push(node.val);
        traversal(node.right);
    };

    traversal(root);

    return result[k - 1];
}

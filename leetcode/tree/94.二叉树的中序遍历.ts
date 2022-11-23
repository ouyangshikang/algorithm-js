// 题目地址：https://leetcode.cn/problems/binary-tree-inorder-traversal

interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

/**
 * 解题思路：递归
 */
function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    const traversal = (node: TreeNode | null) => {
        if (node === null) return;
        traversal(node.left);
        result.push(node.val);
        traversal(node.right);
    };

    traversal(root);

    return result;
}

/**
 * 解题思路：迭代(栈模拟递归)
 */
function inorderTraversal2(root: TreeNode | null): number[] {
    if (root === null) return [];

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
    return result;
}

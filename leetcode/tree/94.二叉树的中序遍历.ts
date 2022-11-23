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

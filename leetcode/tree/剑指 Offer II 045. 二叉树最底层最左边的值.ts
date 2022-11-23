// 题目地址：https://leetcode.cn/problems/LwUNpT/

interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

/**
 * 解题思路：广度优先遍历，树的右节点先入队，则队列最后一个就是最底层最左边的
 * 时间复杂度：O(n)  要遍历的 n 个节点
 * 空间复杂度：O(n)
 */
function findBottomLeftValue(root: TreeNode | null): number {
    if (root === null) return 0;

    const queue = [root];
    const result = [];

    while (queue.length) {
        for (let i = 0; i < queue.length; i++) {
            const node = queue.shift()!;
            result.push(node.val);

            if (node.right) {
                queue.push(node.right);
            }
            if (node.left) {
                queue.push(node.left);
            }
        }
    }

    return result[result.length - 1];
}

/**
 * 解题思路：深度优先遍历，先搜索左节点，记录节点高度进行比较，保留最大高度的节点值
 * 时间复杂度：O(n) 要遍历的 n 个节点
 * 空间复杂度：O(n) 递归栈需要占用 O(n) 的空间
 */
function findBottomLeftValue2(root: TreeNode | null): number {
    let currentHeight = 0;
    let currentVal = 0;

    const dfs = (root: TreeNode | null, height: number) => {
        if (!root) {
            return;
        }

        height++;
        dfs(root.left, height);
        dfs(root.right, height);

        if (height > currentHeight) {
            currentHeight = height;
            currentVal = root.val;
        }
    };

    dfs(root, 0);

    return currentVal;
}

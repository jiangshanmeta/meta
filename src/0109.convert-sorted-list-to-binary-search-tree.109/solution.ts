class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor (val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

class ListNode {
    val: number
    next: ListNode | null
    constructor (val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function sortedListToBST (head: ListNode | null): TreeNode | null {
    const vals:number[] = [];
    while (head !== null) {
        vals.push(head.val);
        head = head.next;
    }

    return buildTree(vals, 0, vals.length - 1);
}

function buildTree (nums:number[], left:number, right:number):TreeNode|null {
    if (right < left) {
        return null;
    }
    const mid = left + ((right - left) >> 1);
    return new TreeNode(
        nums[mid],
        buildTree(nums, left, mid - 1),
        buildTree(nums, mid + 1, right)
    );
}

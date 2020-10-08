class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if(root === null){
        return root;
    }
    if(key<root.val){
        root.left = deleteNode(root.left,key);
        return root;
    }else if(key>root.val){
        root.right = deleteNode(root.right,key);
        return root;
    }
    if(root.left === null || root.right === null){
        return root.left || root.right;
    }
    const rightMin:number = findMin(root.right);
    root.right = deleteNode(root.right,rightMin);
    root.val = rightMin;
    return root;
};

function findMin(root:TreeNode):number{
    while(root.left !== null){
        root = root.left;
    }
    return root.val;
}
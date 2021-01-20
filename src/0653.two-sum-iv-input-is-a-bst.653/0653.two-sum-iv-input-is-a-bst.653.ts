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

function findTarget(root: TreeNode | null, k: number): boolean {
    if(!root){
        return false;
    }
    const seq:number[] = [];
    inOrder(root,seq);
    let left = 0;
    let right = seq.length-1;
    while(left<right){
        const sum = seq[left]+seq[right];
        if(sum === k){
            return true;
        }else if(sum<k){
            left++;
        }else{
            right--;
        }
    }
    return false;
};

function inOrder(root:TreeNode,seq:number[]){
    root.left && inOrder(root.left,seq);
    seq.push(root.val);
    root.right && inOrder(root.right,seq);
}
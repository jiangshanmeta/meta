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


function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
    if(!original || !cloned || !target){
        return null;
    }
    const seq1:TreeNode[] = [original];
    const seq2:TreeNode[] = [cloned];
    let index = 0;
    while(index<seq1.length){
        if(seq1[index] === target){
            return seq2[index];
        }
        if(seq1[index].left){
            seq1.push(seq1[index].left);
            seq2.push(seq2[index].left!);
        }
        if(seq1[index].right){
            seq1.push(seq1[index].right);
            seq2.push(seq2[index].right!);
        }
        index++;
    }
    return null
};
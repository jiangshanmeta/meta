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

function distanceK(root: TreeNode | null, target: TreeNode | null, K: number): number[] {
	if(!root || !target){
        return [];
    }
    const seq:TreeNode[] = [];
    findNode(root,target,seq);

    const result:number[] = [];
    getNode(seq[0],result,K);
    for(let i=1;i<seq.length;i++){
        const rest = K-i;
        if(rest === 0){
            result.push(seq[i].val);
            break;
        }
        if(seq[i-1] === seq[i].left){
            getNode(seq[i].right,result,rest-1);
        }else{
            getNode(seq[i].left,result,rest-1);
        }
    }
    return result;
};

function findNode(root:TreeNode|null,target:TreeNode,seq:TreeNode[]):boolean{
    if(!root){
        return false;
    }
    if(root === target){
        seq.push(root);
        return true;
    }
    const l = findNode(root.left,target,seq);
    if(l){
        seq.push(root);
        return true;
    }
    const r = findNode(root.right,target,seq);
    if(r){
        seq.push(root);
        return true;
    }
    return false;
}

function getNode(root:TreeNode|null,result:number[],rest:number){
    if(!root){
        return
    }
    if(rest === 0){
        result.push(root.val);
        return;
    }
    rest--;
    root.left && getNode(root.left,result,rest);
    root.right && getNode(root.right,result,rest);
}
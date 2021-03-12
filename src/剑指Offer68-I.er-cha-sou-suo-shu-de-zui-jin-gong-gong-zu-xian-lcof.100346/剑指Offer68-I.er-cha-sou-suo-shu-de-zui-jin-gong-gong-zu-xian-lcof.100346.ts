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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {
    if(!root){
        return root;
    }

    if(p.val>q.val){
        const tmp = p;
        p = q;
        q = tmp;
    }
    return helper(root,p.val,q.val)
};

function helper(root:TreeNode|null,p:number,q:number):TreeNode|null{
    if(root === null || root.val === p || root.val === q){
        return root;
    }
    if(root.val>p && root.val<q){
        return root;
    }else if(root.val<p){
        return helper(root.right,p,q);
    }else {
        return helper(root.left,p,q)
    }

}
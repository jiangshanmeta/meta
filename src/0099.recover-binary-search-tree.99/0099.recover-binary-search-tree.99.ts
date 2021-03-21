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
/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null): void {
    if(root === null){
        return
    }
    let bigger:TreeNode|null = null;
    let smaller:TreeNode|null = null;
    const nodes:TreeNode[] = [];
    inOrder(root,nodes)
    for(let i=0;i<nodes.length-1;i++){
        if(nodes[i].val>nodes[i+1].val){
            bigger = nodes[i];
            if(nodes[nodes.length-1].val<nodes[nodes.length-2].val ){
                smaller = nodes[nodes.length-1];
            }else{
                for(let j=i+1;j<nodes.length-1;j++){
                    if(nodes[j].val<nodes[j-1].val && nodes[j].val<nodes[j+1].val ){
                        smaller = nodes[j];
                    }
                }
            }

            break;
        }
    }

    const tmp = bigger!.val;
    bigger!.val = smaller!.val;
    smaller!.val = tmp;

};

function inOrder(root:TreeNode,nodes:TreeNode[]){
    root.left && inOrder(root.left,nodes);
    nodes.push(root);
    root.right && inOrder(root.right,nodes);
}
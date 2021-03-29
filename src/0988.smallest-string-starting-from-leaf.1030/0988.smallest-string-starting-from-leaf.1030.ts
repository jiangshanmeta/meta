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

function smallestFromLeaf(root: TreeNode | null): string {
    let result = '';
    function dfs(root:TreeNode,str:string){
        str = `${String.fromCharCode(root.val+97)}${str}`;
        if(!root.left && !root.right){
            if(result === '' || str<result){
                result = str;
            }
            return;
        }
        root.left && dfs(root.left,str);
        root.right && dfs(root.right,str);
    }
    root && dfs(root,'');
    return result;
};
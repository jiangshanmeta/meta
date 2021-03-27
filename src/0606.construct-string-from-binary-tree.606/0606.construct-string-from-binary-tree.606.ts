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
function tree2str(t: TreeNode | null): string {
    if(t === null){
        return '';
    }
    let result = t.val+'';
    if(t.left && t.right){
        result = `${result}(${tree2str(t.left)})(${tree2str(t.right)})`
    }else if(t.left){
        result = `${result}(${tree2str(t.left)})`
    }else if(t.right){
        result = `${result}()(${tree2str(t.right)})`;
    }

    return result;
};

function traversal(t:TreeNode){
    const result = t.val+'';


}
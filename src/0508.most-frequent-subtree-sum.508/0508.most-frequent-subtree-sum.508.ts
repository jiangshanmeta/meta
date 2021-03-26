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

function findFrequentTreeSum(root: TreeNode | null): number[] {
    const map = new Map<number,number>();
    function postOrder(root:TreeNode|null){
        if(root === null){
            return 0;
        }
        const left = postOrder(root.left);
        const right = postOrder(root.right);
        const sum = left+right+root.val;
        if(map.has(sum)){
            map.set(sum,map.get(sum)+1)
        }else{
            map.set(sum,1);
        }
        return sum;
    }
    postOrder(root);

    const result:number[] = [];
    let maxCount = 0;
    for(let [sum,count] of map){
        if(count>maxCount){
            result.length = 0;
            result.push(sum);
            maxCount = count;
        }else if(count === maxCount){
            result.push(sum);
        }
    }
    return result;
};
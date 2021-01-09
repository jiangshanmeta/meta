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

function findMode(root: TreeNode | null): number[] {
    const result:number[] = [];
    let last = NaN;
    let count = 0;
    let maxCount = 0;
    const stack:TreeNode[] = [];
    while(root){
        stack.push(root);
        root = root.left;
    }
    while(stack.length){
        let node:TreeNode|null = stack.pop()!;
        if(node.val === last){
            count++;
        }else{
            last = node.val;
            count = 1;
        }
        if(count>maxCount){
            result.length = 0;
            result.push(last);
            maxCount = count;
        }else if(count === maxCount){
            result.push(last);
        }
        node = node.right;
        while(node){
            stack.push(node);
            node = node.left;
        }

    }

    return result
};
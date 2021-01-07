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
/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    const queen:Array<TreeNode|null>= [];
    if(root){
        queen[0] = root;
    }
    let index = 0;
    while(index<queen.length){
        if(queen[index] === null){
            index++;
            continue;
        }
        queen.push(queen[index].left);
        queen.push(queen[index].right);
        index++;
    }

    return JSON.stringify(queen.map((node)=>{
        if(node === null){
            return null
        }
        return node.val
    }))
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const seq = JSON.parse(data) as Array<number|null>;
    if(seq.length === 0){
        return null;
    }
    const root = new TreeNode(seq[0]);
    let levelNodes = [root];
    let index = 1;
    while(levelNodes.length){
        const nextLevel:TreeNode[] = [];
        for(let i=0;i<levelNodes.length;i++){
            if(seq[index] !== null){
                const node = new TreeNode(seq[index]);
                levelNodes[i].left = node
                nextLevel.push(node)
            }
            index++;
            if(seq[index] !== null){
                const node = new TreeNode(seq[index]);
                levelNodes[i].right = node
                nextLevel.push(node)
            }
            index++;
        }
        levelNodes = nextLevel;
    }
    return root;
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
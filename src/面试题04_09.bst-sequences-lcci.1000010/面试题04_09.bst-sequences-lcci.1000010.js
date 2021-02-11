/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var BSTSequences = function(root) {
    if(!root){
        return [[]];
    }
    if(root.left && root.right){
        const left = BSTSequences(root.left);
        const right = BSTSequences(root.right);
        const result = [];
        for(let i=0;i<left.length;i++){
            for(let j=0;j<right.length;j++){
                backTracking(left[i],right[j],0,0,[root.val],result);
            }
        }
        return result;
    }else if(root.left){
        const left = BSTSequences(root.left);
        return left.map((row)=>{
            return [
                root.val,
                ...row,
            ]
        })
    }else if(root.right){
        const right = BSTSequences(root.right);
        return right.map((row)=>{
            return [
                root.val,
                ...row
            ]
        })
    }else{
        return [
            [root.val]
        ]
    }
};

function backTracking(A,B,index1,index2,sequence,result){
    if(index1 === A.length && index2 === B.length){
        result.push(sequence.slice(0));
        return;
    }
    if(index1<A.length){
        sequence.push(A[index1]);
        backTracking(A,B,index1+1,index2,sequence,result);
        sequence.pop();
    }
    if(index2<B.length){
        sequence.push(B[index2]);
        backTracking(A,B,index1,index2+1,sequence,result);
        sequence.pop();
    }
}
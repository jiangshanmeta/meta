function generateParenthesis(n: number): string[] {
    const result:string[] = [];
    helper(n,n,[] as string[],result);
    return result;
};

function helper(left:number,right:number,sequence:string[],result:string[]){
    if(left === 0 && right ===0){
        result.push(sequence.join(''));
        return;
    }
    if(left>0){
        sequence.push('(');
        helper(left-1,right,sequence,result);
        sequence.pop();
    }
    if(right>left){
        sequence.push(')');
        helper(left,right-1,sequence,result);
        sequence.pop();
    }
}
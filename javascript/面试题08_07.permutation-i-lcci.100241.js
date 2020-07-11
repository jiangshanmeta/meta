/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
    const result = [];
    backTracking([],S,result,new Array(S.length).fill(false));
    return result;
};

function backTracking(sequence,S,result,used){
    if(sequence.length === S.length){
        result.push(sequence.join(''));
        return;
    }
    for(let i=0;i<S.length;i++){
        if(used[i]){
            continue;
        }
        used[i] = true;
        sequence.push(S[i]);
        backTracking(sequence,S,result,used);
        sequence.pop();
        used[i] = false;
    }
}
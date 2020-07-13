/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    const list = s.split('');
    list.sort();
    const result = [];
    backTracking([],list,new Array(s.length).fill(false),result);
    return result;
};

function backTracking(sequence,list,used,result){
    if(sequence.length === list.length){
        result.push(sequence.join(''));
        return;
    }
    for(let i=0;i<used.length;i++){
        if(used[i]){
            continue;
        }
        if(i>0 && list[i] === list[i-1] && !used[i-1]){
            continue;
        }
        sequence.push(list[i]);
        used[i] = true;
        backTracking(sequence,list,used,result);
        used[i] = false;
        sequence.pop();
    }
}
// A string S represents a list of words.
// Each letter in the word has 1 or more options.  If there is one option, the letter is represented as is.  If there is more than one option, then curly braces delimit the options.  For example, "{a,b,c}" represents options ["a", "b", "c"].
// For example, "{a,b,c}d{e,f}" represents the list ["ade", "adf", "bde", "bdf", "cde", "cdf"].
// Return all words that can be formed in this manner, in lexicographical order.

/**
 * @param {string} S
 * @return {string[]}
 */
var permute = function(S) {
    const parseS = [];
    let index = 0;
    while(index<S.length){
        if(S[index] === '{'){
            // 括号的 多个一组
            const endIndex = S.indexOf('}',index);
            parseS.push(S.substring(index+1,endIndex).split(",").sort());
            index = endIndex+1;
            
        }else{
            // 一个letter一组
            parseS.push([S[index]]);
            index++;
        }

    }
    const result = [];
    backTracking([],parseS,result);
    return result;
};

function backTracking(list,parseS,result){
    if(list.length === parseS.length){
        return result.push(list.join(""));
    }
    let index = list.length;
    for(let i=0;i<parseS[index].length;i++){
        list.push(parseS[index][i]);
        backTracking(list,parseS,result);
        list.pop();
    }
}
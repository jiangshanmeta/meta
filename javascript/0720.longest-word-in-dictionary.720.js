/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    const trie = {};
    words.sort((a,b)=>a.length-b.length);
    let result = "";
    for(let i=0;i<words.length;i++){
        const word = words[i];
        if(word.length-result.length>1){
            break;
        }
        let before = trie;
        let flag = true;
        for(let j=0;j<word.length-1;j++){
            if(before[word[j]] === undefined){
                flag = false;
                break;
            }
            before = before[word[j]];
        }
        if(!flag){
            continue;
        }
        before[word[word.length-1]] = {};
        if(word.length>result.length|| (word.length===result.length && word<result)){
            result = word;
        }
    }
    return result;
};
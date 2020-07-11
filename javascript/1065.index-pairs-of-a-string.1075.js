/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function(text, words) {
    // 把words构成前缀树
    const trie = new Array(26);
    for(let i=0;i<words.length;i++){
        const word = words[i];
        let prev = trie;
        for(let j=0;j<word.length;j++){
            const code = word.charCodeAt(j)-97;
            prev = prev[code] || (prev[code] = new Array(27));
        }
        prev[26] = true;
    }
    const result = [];
    for(let i=0;i<text.length;i++){
        // 在前缀树上搜索
        let prev = trie;
        for(let j=i;j<text.length;j++){
            if(!prev){
                break;
            }
            const code = text.charCodeAt(j)-97;
            if(prev[code] && prev[code][26]){
                result.push([i,j]);
            }
            prev = prev[code];
        }
    }
    return result;
};
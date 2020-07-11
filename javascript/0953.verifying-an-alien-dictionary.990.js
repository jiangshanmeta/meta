/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const indexMap = {};
    for(let i=0;i<order.length;i++){
        indexMap[order[i]] = i;
    }
    for(let i=1;i<words.length;i++){
        // 比较相邻的单词
        let word1 = words[i-1];
        let word2 = words[i];
        let l1 = word1.length;
        let l2 = word2.length;
        let l = Math.min(l1,l2);
        let largerFlag = false;
        // 每个字母进行比较
        for(let j=0;j<l;j++){
            const delta = indexMap[word1[j]]-indexMap[word2[j]];
            if(delta>0){
                return false;
            }else if(delta<0){
                largerFlag = true;
                break;
            }
        }
        if(largerFlag){
            continue;
        }else if(l1>l2){
            // 相同位数下两者相同，看前者是否位数多
            return false;
        }
        
    }
    return true;
};
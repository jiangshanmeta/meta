/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
// 按题目说的做就好了
function isExpressiveWord(S,word){
    let index1 = 0;
    let index2 = 0;
    while(index1<S.length && index2<word.length){
        let char1 = S[index1++];
        let char2 = word[index2++];
        if(char1 !== char2){
            return false;
        }
        
        let count1 = 1;
        while(index1<S.length && S[index1] === char1){
            count1++;
            index1++;
        }
        
        let count2 = 1;
        while(index2<word.length && word[index2] === char2){
            count2++;
            index2++;
        }
        
        if(count1<count2 || (count1>count2 && count1<3)){
            return false;
        }
        
        
    }
    if(index1 !== S.length || index2 !== word.length){
        return false;
    }
    return true;
}

var expressiveWords = function(S, words) {
    let result = 0;
    for(let i=0;i<words.length;i++){
        isExpressiveWord(S,words[i]) && result++;   
    }
    return result;
};
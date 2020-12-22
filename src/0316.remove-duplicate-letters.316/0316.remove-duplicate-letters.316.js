/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const counts = new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        counts[s.charCodeAt(i)-97]++;
    }
    const result = [];
    const used = new Array(26).fill(false);
    for(let i=0;i<s.length;i++){
        const code = s.charCodeAt(i)-97;
        if(!used[code]){
            // 前面的元素更大 而且剩余数量>0 所以可以放在后面 当前的可以移除
            while(result.length && result[result.length-1]>s[i] ){
                const prevCode = result[result.length-1].charCodeAt(0)-97;
                if(counts[prevCode]>0){
                    result.pop();
                    used[prevCode] = false;
                }else{
                    break;
                }
            }
            result.push(s[i])
            used[code] = true;
        }
        counts[code]--;
    }

    return result.join('')
};
/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {boolean}
 */
var canConvertString = function(s, t, k) {
    if(s.length !== t.length){
        return false;
    }
    const diffMin = new Array(26);
    for(let i=1;i<26;i++){
        diffMin[i] = i-26;
    }
    for(let i=0;i<s.length;i++){
        let diff = t.charCodeAt(i)-s.charCodeAt(i);
        if(diff === 0){
            continue;
        }
        if(diff<0){
            diff += 26;
        }
        diffMin[diff] += 26;
        if(diffMin[diff]>k){
            return false;
        }
        
    }
    return true;
};
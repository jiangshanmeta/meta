/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
    if(s1.length !== s2.length){
        return false;
    }
    const counts = new Array(26).fill(0);
    for(let i=0;i<s1.length;i++){
        counts[s1.charCodeAt(i)-97]++;
    }
    for(let i=0;i<s2.length;i++){
        const code = s2.charCodeAt(i)-97;
        counts[code]--;
        if(counts[code]<0){
            return false;
        }
    }
    return true;
};
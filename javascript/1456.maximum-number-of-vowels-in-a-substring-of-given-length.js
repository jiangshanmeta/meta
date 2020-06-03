/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowelMap = {
        a:true,
        e:true,
        i:true,
        o:true,
        u:true
    };
    let count = 0;
    for(let i=0;i<k-1;i++){
        if(vowelMap[s[i]]){
            count++;
        }
    }

    let result = count;
    let index = k-1;
    for(let i=k-1;i<s.length;i++){
        if(vowelMap[s[i]]){
            count++;
        }
        result = Math.max(result,count);
        if(vowelMap[s[i-k+1]]){
            count--;
        }

    }
    return result; 
};
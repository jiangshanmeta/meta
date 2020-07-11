/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    
    let counter = new Array(s.length).fill(0);
    
    const aCharCode = 'a'.charCodeAt(0);
    
    for(let i =0;i<s.length;i++){
        counter[s.charCodeAt(i) - aCharCode]++;
        counter[t.charCodeAt(i) - aCharCode]--;
    }
    
    return counter.every(function(item){
        return !item;
    })
};
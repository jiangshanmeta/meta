/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = {};
    for(let i=0;i<s.length;i++){
        map[s[i]] = (map[s[i]] || 0) + 1;
    }
    
    const keys = Object.keys(map).sort((a,b)=>map[b]-map[a]);
    const result = [];
    for(let i=0;i<keys.length;i++){
        for(let j=0;j<map[keys[i]];j++){
            result.push(keys[i]);    
        }
    }
    return result.join("");
};
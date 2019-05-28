/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const s2t = {};
    const t2s = {};
    for(let i=0;i<s.length;i++){
        if(s2t[s[i]] === undefined){
            if(t2s[t[i]] !== undefined){
                return false;
            }
            
            s2t[s[i]] = t[i];
            t2s[t[i]] = s[i];
        }else if(s2t[s[i]] !== t[i]){
            return false;
        }
        
    }
    
    return true;
};
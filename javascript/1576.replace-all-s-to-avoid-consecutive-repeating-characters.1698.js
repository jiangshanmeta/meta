/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    const result = [];
    for(let i=0;i<s.length;i++){
        if(s[i] === '?'){
            const prev = result.length?result[result.length-1]:null;
            const next = i<s.length-1?s[i+1]:null;
            for(let i=0;i<26;i++){
                const char = String.fromCharCode(i+97);
                if(char !== prev && char !== next){
                    result.push(char);
                    break;
                }
            }
        }else{
            result.push(s[i]);
        }
    }
    return result.join('');
};
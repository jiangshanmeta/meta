/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    const chars = new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        chars[s.charCodeAt(i)-97]++;
    }
    const result = [];
    let rest = s.length;
    while(rest>0){
        for(let i=0;i<26;i++){
            if(chars[i] === 0){
                continue;
            }
            result.push(String.fromCharCode(i+97));
            rest--;
            chars[i]--;
        }
        for(let i=25;i>-1;i--){
            if(chars[i] === 0){
                continue;
            }
            result.push(String.fromCharCode(i+97));
            rest--;
            chars[i]--;
        }
    }
    return result.join('');
};
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
//  a^b^b = a^0 = a
// 即通过异或操作可以成对消除元素
var findTheDifference = function(s, t) {
    let code = 0;
    for(let i=0;i<s.length;i++){
        code ^= s.charCodeAt(i);
    }
    
    for(let i=0;i<t.length;i++){
        code ^= t.charCodeAt(i);
    }
    
    return String.fromCharCode(code);
};
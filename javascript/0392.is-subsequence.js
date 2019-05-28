/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // index是在t中搜索的开始位置
    let index = 0;
    // 每一个s中的元素，在t中搜索
    for(let i=0;i<s.length;i++){
        index = t.indexOf(s[i],index);
        // 没找到
        if(index === -1){
            return false;
        }
        index++;
    }
    return true;
};
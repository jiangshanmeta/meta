/**
 * @param {string} s
 * @return {string}
 */
// 按题意做就好了
var reverseWords = function(s) {
    return s.split(" ").map((word)=>{
        let reverse = '';
        for(let i=word.length-1;i>-1;i--){
            reverse += word[i];
        }
        return reverse;
    }).join(" ")
};
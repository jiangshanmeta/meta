/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length){
        return "";
    }
    var minLen = Infinity;
    var flag;
    var first;
    var rst = [];
    strs.forEach(function(item){
        if(item.length<minLen){
            minLen = item.length;
        }
    })
    
    for(var i=0;i<minLen;i++){
        first = strs[0][i];
        flag = strs.every(function(item){
            if(item[i] === first){
                return true;
            }else{
                return false;
            }
        })
        if(flag){
            rst.push(first)
        }else{
            break;
        }
    }
    return rst.join("");
};
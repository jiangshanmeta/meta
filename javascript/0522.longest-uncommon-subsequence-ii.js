/**
 * @param {string[]} strs
 * @return {number}
 */

function isSubsequence(str,sub){
    let index = -1;
    for(let i=0;i<sub.length;i++){
        index = str.indexOf(sub[i],index+1);
        if(index === -1){
            return false;
        }
    }
    return true;
}

// 我们从长的字符串开始看起 
// 对于一个字符串str 如果不是重复的 用它自身和以前的字符串比较
// 如果str不是前面出现过的子序列(但是其子序列不一定不是其他字符串的子序列) we got it
var findLUSlength = function(strs) {
    // 按长度从大到小排序 长度相同的按字典序排 便于判断是否是重复的字符串
    strs.sort((a,b)=>{
        const la = a.length;
        const lb = b.length;
        if(la !== lb){
            return lb-la;
        }
        return a<b?1:-1;
    });
    
    let index = 0;
    const sequence = [];
    
    while(index<strs.length){
        const val = strs[index];
        let count = 1;
        index++;
        while(index<strs.length && strs[index] === val){
            count++;
            index++;
        }
        
        if(count === 1){
            // 确定是否是特殊子序列
            const flag = sequence.every((str)=>!isSubsequence(str,val))
            if(flag){
                return val.length;
            }
            
        }
        sequence.push(val);
    }
    
    return -1;
};
/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    // 字符串只包含小写英文字母，即我们只需26位即可表示某位是否被使用
    // 转换为32位数字表示，利用位运算处理交集并集
    const map = {};
    const digits = [];
    let max = 0;
    for(let i=0;i<arr.length;i++){
        // 将字符串映射为数字
        const flags = new Array(26).fill(false);
        // 字符串的字符可能重复，这时直接不用考虑了
        let uniqueFlag = true;
        for(let j=0;j<arr[i].length;j++){
            const code = arr[i].charCodeAt(j)-97;
            if(flags[code]){
                uniqueFlag = false;
                break;
            }
            flags[code] = true;
        }
        if(uniqueFlag){
            let digit = 0;
            for(let i=0;i<26;i++){
                digit = (digit<<1)+(flags[i]?1:0);
            }

            if(!map[digit]){
                map[digit] = true;
                digits.push(digit);
                max = Math.max(max,countOne(digit))
            }
            
        }
    }
    
    const stack = digits.slice(0);
    
    while(stack.length){
        const node = stack.pop();
        for(let i=0;i<digits.length;i++){
            // 两个字符串用到同一个字符，则有一位都为1
            if(digits[i]&node){
                continue;
            }
            // 合并操作
            const newNode = node | digits[i];
            if(!map[newNode]){
                map[newNode] = true;
                stack.push(newNode);
                max = Math.max(max,countOne(newNode));
            }
            
        }
        
    }
    
    return max;
};


function countOne(n){
    let count = 0;
    while(n){
        count++;
        n = n&(n-1);
    }
    return count;
}


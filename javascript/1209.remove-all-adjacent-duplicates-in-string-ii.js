/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const charStack = [];
    const countStack = [];
    let index = 0;
    while(index<s.length){
        // 连续的char有几个
        const char = s[index++];
        let count = 1;
        while(index<s.length && s[index] === char){
            index++;
            count++;
        }
        // 删除后剩余的元素
        count %= k;
        // 可以全删掉
        if(count === 0){
            continue;
        }
        // 和栈顶元素相同 合并
        if(charStack.length > 0 && char === charStack[charStack.length-1]){
            count = (count+countStack[countStack.length-1])%k;
            if(count>0){
                countStack[countStack.length-1] = count;
            }else{
                charStack.pop();
                countStack.pop();
            }
            
        }else{
            // 和栈顶元素不同 入栈
            charStack.push(char);
            countStack.push(count);
        }
    }
    const result = [];
    for(let i=0;i<charStack.length;i++){
        result.push(charStack[i].repeat(countStack[i]));
    }
    return result.join('')
}
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const parentheseStack = [];
    // 还未被匹配的括号的索引
    const indexStack = [];
    for(let i=0;i<s.length;i++){
        if(s[i] === '(' ){
            parentheseStack.push(s[i]);
            indexStack.push(i);
        }else if(s[i] === ')'){
            if(parentheseStack.length === 0 || parentheseStack[parentheseStack.length-1] !== '('){
                parentheseStack.push(s[i]);
                indexStack.push(i);
            }else{
                parentheseStack.pop();
                indexStack.pop();
            }
        }
    }
    const result = [];
    let index1 = 0;
    let j = 0;
    // 跳过未被匹配的括号
    while(j<indexStack.length){
        const index2 = indexStack[j];
        while(index1<index2){
            result.push(s[index1++]);
        }
        j++;
        index1++;
    }
    while(index1<s.length){
        result.push(s[index1++]);
    }
    return result.join('');
};
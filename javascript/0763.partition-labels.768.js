/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const last = {};
    for(let i=S.length-1;i>-1;i--){
        if(last[S[i]] === undefined){
            last[S[i]] = i;
        }
    }

    const result = [];
    let startIndex = 0;
    while(startIndex<S.length){
        // 找到该字母最后出现的位置,作为尝试的终点
        let endIndex = last[S[startIndex]];
        let index = startIndex+1;
        while(index<endIndex){
            // 有出现位置更靠后的元素,扩展终点
            if(last[S[index]]>endIndex){
                endIndex = last[S[index]];
            }
            index++;
        }
        result.push(endIndex-startIndex+1);
        startIndex = endIndex+1;
    }
    return result;
};
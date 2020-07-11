/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt1 = function(text) {
    // 统计每一组连续相同的字符有几个
    const chars = [];
    const counts = [];
    const countsByChar = {};
    
    let index = 0;
    while(index<text.length){
        const char = text[index++];
        let count = 1;
        while(index<text.length && text[index] === char){
            count++;
            index++;
        }
        countsByChar[char] = (countsByChar[char] || 0)+1;
        chars.push(char);
        counts.push(count);
    }

    let maxCount = counts[0]+(countsByChar[chars[0]]>1?1:0);

    for(let i=1;i<counts.length-1;i++){
        // 其他组有相同字符 至少可以+1
        maxCount = Math.max(
            maxCount,
            counts[i]+(countsByChar[chars[0]]>1?1:0),
        );
        // 有一个字符把两个相同的组分割
        if(counts[i]===1 && chars[i-1]===chars[i+1] ){
            maxCount = Math.max(
                maxCount,
                counts[i-1]+counts[i+1]+(countsByChar[chars[i-1]]>2?1:0),
            );
        }
    }
    return maxCount;
};
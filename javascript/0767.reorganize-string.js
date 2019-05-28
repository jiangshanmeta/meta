/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    // 先根据letter countBy
    const countBy = {};
    for(let i=0;i<S.length;i++){
        countBy[S[i]] = (countBy[S[i]] || 0) + 1;
    }
    
    const half = Math.ceil(S.length/2);
    // 从数量多到少排序
    const pairs = Object.entries(countBy).sort((a,b)=>b[1]-a[1]);
    // 偶数个的情况 最多有S.length/2 个 奇数个的情况 最多允许 Math.ceil(S.length/2)
    if(pairs[0][1]>half){
        return "";
    }
    // 间隔分配 注意一定要从多到少
    const result = new Array(S.length);
    let index = 0;
    for(let i=0;i<pairs.length;i++){
        let count = pairs[i][1];
        const letter = pairs[i][0];
        while(count-->0){
            if(index>S.length-1){
                index = 1;
            }
            result[index] = letter;
            index += 2;
        }
    }
    
    return result.join("");
};
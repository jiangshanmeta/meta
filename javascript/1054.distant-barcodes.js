/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
// 印象中有一道非常类似的题目
var rearrangeBarcodes = function(barcodes) {
    // 统计频率
    const countBy = {};
    for(let i=0;i<barcodes.length;i++){
        countBy[barcodes[i]] = (countBy[barcodes[i]] || 0) + 1;
    }
    const result = new Array(barcodes.length);
    // 按频率从高到低排列
    const keys = Object.keys(countBy).sort((a,b)=>countBy[b]-countBy[a]);
    // 间隔放入新数组中
    let index = 0;
    for(let i=0;i<keys.length;i++){
        const value = +keys[i];
        const count = countBy[keys[i]];
        for(let j=0;j<count;j++){
            result[index] = value;
            index += 2;
            if(index>result.length-1){
                index = 1;
            }
        }
    }
    return result;
};
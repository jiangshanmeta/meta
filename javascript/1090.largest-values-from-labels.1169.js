/**
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
    // 按照value顺序从大到小排列
    const valueLabels = values.map((value,index)=>{
        return {
            value,
            label:labels[index],
        }
    }).sort((a,b)=>b.value-a.value);

    let result = 0;
    let numCount = 0;
    // 记住每个label被用了几次
    let labelCountMap = {};
    for(let i=0;i<valueLabels.length;i++){
        const label = valueLabels[i].label;
        // 该label用的到上限了
        if(labelCountMap[label] && labelCountMap[label] === use_limit){
            continue;
        }
        // 题目限制了values[i]>=0 所以一直加就行
        result += valueLabels[i].value;
        labelCountMap[label] = (labelCountMap[label] || 0)+1;
        numCount++;
        // 到总使用数上限了
        if(numCount === num_wanted){
            break;
        }
    }
    return result;
};
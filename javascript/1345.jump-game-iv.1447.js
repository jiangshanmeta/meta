/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
    const groupByNode = arr.reduce((obj,item,index)=>{
        if(!obj[item]){
            obj[item] = []
        }
        obj[item].push(index);
        return obj;
    },{});
    const minSteps = new Array(arr.length).fill(Infinity);
    minSteps[0] = 0;
    const queue = [0];
    while(queue.length){
        const index = queue.shift();
        // 探索临边
        if(index>0 && minSteps[index-1]>minSteps[index]+1){
            minSteps[index-1] = minSteps[index]+1;
            queue.push(index-1);
        }
        if(index<arr.length-1 && minSteps[index+1]>minSteps[index]+1){
            minSteps[index+1] = minSteps[index]+1;
            queue.push(index+1);
        }
        const sameIndexs = groupByNode[arr[index]];
        for(let i=0;i<sameIndexs.length;i++){
            const rIndex = sameIndexs[i];
            if(minSteps[rIndex]>minSteps[index]+1){
                minSteps[rIndex] = minSteps[index]+1;
                queue.push(rIndex);
            }
        }
        
        
    }
    
    return minSteps[arr.length-1];
};
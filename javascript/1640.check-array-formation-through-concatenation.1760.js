/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    const valueIndexMap = {};
    for(let i=0;i<pieces.length;i++){
        for(let j=0;j<pieces.length;j++){
            valueIndexMap[pieces[i][j]] = i;
        }
    }
    let index1 = 0;
    while(index1<arr.length){
        const index2 = valueIndexMap[arr[index1]];
        if(index2 === undefined){
            return false;
        }
        const sub = pieces[index2];
        let index3 = 0;
        while(index3<sub.length){
            if(sub[index3] !== arr[index1]){
                return false;
            }
            index1++;
            index3++;
        }
        
    }
    return true;
};
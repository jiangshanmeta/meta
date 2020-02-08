/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    return mat.map((row,index)=>{
        return {
            count:count1(row),
            index
        }
    }).sort((a,b)=>{
        if(a.count !== b.count){
            return a.count-b.count;
        }
        return a.index-b.index;
    }).slice(0,k).map(item=>item.index);
};

function count1(row){
    let max1Index = -1;
    let low = 0;
    let high = row.length-1;
    while(low<=high){
        const mid = (low+high)>>1;
        if(row[mid] === 1){
            max1Index = Math.max(max1Index,mid);
            low = mid+1;
        }else{
            high = mid-1;
        }
    }
    return max1Index+1;
}
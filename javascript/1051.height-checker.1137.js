/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // 排序 然后和已排序的一个个对比
    const copy = Array.from(heights).sort((a,b)=>a-b);
    let count = 0;
    for(let i=0;i<heights.length;i++){
        if(copy[i] !== heights[i]){
            count++;
        }
    }
    return count;
};
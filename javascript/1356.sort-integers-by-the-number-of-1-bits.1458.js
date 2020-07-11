/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const map = {};
    for(let i=0;i<arr.length;i++){
        map[arr[i]] = count1(arr[i]);
    }
    
    return arr.sort((a,b)=>{
        if(map[a] !== map[b]){
            return map[a]-map[b];
        }
        return a-b;
    });
};
// 数1的个数
function count1(num){
    let count = 0;
    while(num){
        num = num&(num-1);
        count++;
    }
    return count;
}
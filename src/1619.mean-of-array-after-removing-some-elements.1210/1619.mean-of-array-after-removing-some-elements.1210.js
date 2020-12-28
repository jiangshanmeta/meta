/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a,b)=>a-b);
    let fivePervent = arr.length/20;
    let sum = 0;
    for(let i=fivePervent;i<arr.length-fivePervent;i++){
        sum += arr[i];
    }

    return sum/(arr.length*0.9)
};
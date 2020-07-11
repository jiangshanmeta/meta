/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    const hash = {};
    let result = 1;
    hash[arr[0]] = 1;
    for(let i=1;i<arr.length;i++){
        let num = hash[arr[i]]?hash[arr[i]]:1;
        // 看以arr[i]-difference为结尾的序列的最大长度
        if(hash[arr[i]-difference]){
            num = Math.max(num,   hash[arr[i]-difference]+1);
        }
        hash[arr[i]] = num;
        result = Math.max(result,num);
    }
    return result;
};
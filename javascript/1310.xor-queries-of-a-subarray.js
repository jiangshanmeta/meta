/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const result = [];
    // 这题有点像前缀和数组
    // x^y^x === y
    // 所以[L,R]范围内的xor 等于 [0,L-1]的xor  XOR  [0,R]范围内的xor
    const prefixXor = new Array(arr.length+1);
    prefixXor[0] = 0;
    for(let i=0;i<arr.length;i++){
        prefixXor[i+1] = prefixXor[i]^arr[i];
    }
    for(let i=0;i<queries.length;i++){
        const [L,R] = queries[i];
        result.push(prefixXor[R+1]^prefixXor[L]);
    }

    return result;
};
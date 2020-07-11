/**
 * @param {number} label
 * @return {number[]}
 */
// 这个题如果不是zigzag的 直接按照完全二叉树的 不断整除2即可
// 所以问题就是如何由正常的转换为zigzag的
var pathInZigZagTree = function(label) {
    const N = Math.floor(Math.log2(label))
    const result = new Array(N+1);
    result[0] = 1;
    let base = 2**N;
    // 如果label所在的行是反向的 需要调整到对称位置
    if(N&1){ 
        label = base*2-(label-base)-1;
    }
    result[N] = label;
    let index = N-1;
    while(index>-1){
        // 按正常处理
        result[index] = result[index+1] >> 1;
        // index+1是反向的
        if((index & 1) === 0){
            result[index+1] = base*2-(result[index+1]-base)-1;
        }
        base >>= 1;
        index--;
    }
    
    return result;
};
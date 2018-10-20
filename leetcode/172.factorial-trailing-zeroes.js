/**
 * @param {number} n
 * @return {number}
 */
// https://blog.csdn.net/luchenqun/article/details/6385111

var trailingZeroes = function(n) {
    let count = 0;
    for(let i=5;i<n+1;i*=5){
        // 求不大于n的数有几个i
        count += (n/i | 0)
    }
    return count;
};
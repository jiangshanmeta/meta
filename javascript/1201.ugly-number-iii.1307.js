/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
// https://www.youtube.com/watch?v=gj4JevBj8-Y
var nthUglyNumber = function(n, a, b, c) {
    const ab = lcm(a,b);
    const ac = lcm(a,c);
    const bc = lcm(b,c);
    const abc = lcm(a,bc);
    let low = 1;
    // 题目中给出的上界
    let high = 2*10**9;
    while(low<high){
        const mid = (low+high) >>> 1;
        // 求出<=mid的数中有几个丑数
        // mid//a 求的是 小于等于mid 有几个是a的倍数的丑数 mid//b mid//c 类似
        // 由于有的数可能同时是 ab的倍数 ac 的倍数 bc的倍数 因此上面三个数简单相加会重复 需要减掉这这些重复计算的
        // 这样会多减去一个 abc共同的倍数 所以要加上
        // 不是很理解的话可以先考虑只有 a和b 画画Venn图
        const count = Math.floor(mid/a)+Math.floor(mid/b)+Math.floor(mid/c)-Math.floor(mid/ab)-Math.floor(mid/ac)-Math.floor(mid/bc)+Math.floor(mid/abc);
        // 大于等于目标值，则 要返回的值一定是小于等于mid
        if(count>=n){
            high = mid;
        }else{
            // 数量不够，则第N个一定大于mid 最小是mid+1
            low = mid+1;
        }
        
    }
    return low;
};

// 最大公约数
function gcd(a,b){
    if(a<b){
        const tmp = a;
        a = b;
        b = tmp;
    }
    while(b !== 0){
        const tmp = a%b;
        a = b;
        b = tmp;
    }
    return a;
}
// 最小公倍数
function lcm(a,b){
    return a*b/gcd(a,b)
}
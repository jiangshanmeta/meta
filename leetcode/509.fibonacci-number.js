/**
 * @param {number} N
 * @return {number}
 */
// 题目已经把状态转移方程列出来了 F(N) = F(N-1) + F(N-2)
// 递推就行了
var fib = function(N) {
    if(N === 0){
        return 0;
    }
    let a = 0;
    let b = 1;
    for(let i=2;i<N+1;i++){
        let tmp = a+b;
        a = b;
        b = tmp;
    }
    return b;
};
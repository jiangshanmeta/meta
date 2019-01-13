/**
 * @param {number[]} A
 * @return {number}
 */
// 构成三角形的条件, 当a<=b<=c时 a+b>c
// A从小到大排序
// 假设 i<j<k 对应A[i]+A[j]>A[k]
// 令 j k 固定，要和最大，则i应该尽可能大，即 i+i == j (i j 相邻)
// k 固定， 有多组 i j能构成三角形，要和最大，k == j+1
// 即 i j k 相邻

var largestPerimeter = function(A) {
    // 从小到大排好序
    A.sort((a,b)=>a-b);
    for(let i=A.length-3;i>-1;i--){
        if(A[i]+A[i+1]>A[i+2]){
            return A[i]+A[i+1]+A[i+2];
        }
    }
    return 0;
};
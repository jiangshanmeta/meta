/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    // 从小到大排列
    A.sort((a,b)=>a-b);
    let index = 0;
    while(index<A.length && K>0){
        // 先尽可能把负数调整为正数 较小的负数先调整
        if(A[index] <0){
            A[index] = -A[index];
            K--;
            index++;
        }else{
            // 现在所有值都不小于0了 
            // 负负得正 所以仅需调整K%2次
            K %= 2;
            if(K === 1){
                // 翻转最小的值
                // 该值是 A[index] A[index-1] (翻转负值得到) 的最小值
                if(index>0 && A[index-1]<A[index]){
                    index--;
                }
                A[index] = -A[index];
            }

            break;
        }
    }
    // 求和
    return A.reduce((sum,item)=>{
        return sum+item;
    },0);
};
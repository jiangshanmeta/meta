/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
    let max = 0;
    // 上升序列元素个数
    let increasing = 0;
    // 下降序列元素个数
    let decreasing = 0;
    for(let i=1;i<A.length;i++){
        // 现在是上升序列，decreasing不为0是上一个mountain下降结束，在后面重置increasing特殊处理了
        if(A[i]>A[i-1] && decreasing === 0){
            increasing++
            continue;
        }else if(A[i]<A[i-1] && increasing>0){
            // 下降序列，必须有对应上升序列，否则不构成新的mountain
            decreasing++;
            continue;
        }
        
        if(increasing>0 && decreasing>0){
            // 山总元素个数
            const sum = increasing+decreasing+1;
            if(sum>max){
                max = sum;
            }
        }
        // 重置。考虑到因为进入新的上升序列而重置，increasing要判断
        increasing = A[i]>A[i-1]?1:0;
        decreasing = 0;
    }
    
    // 对最后的序列进行判断
    if(increasing>0 && decreasing>0){
        const sum = increasing+decreasing+1;
        if(sum>max){
            max = sum;
        }
    }
    
    return max;
};
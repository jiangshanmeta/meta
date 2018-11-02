/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
    let leftMax = A[0];
    let rightIndex = 0;
    let leftIndex = 0;

    // 从右向左找第一个比leftMax小的
    // 不包含等于，因为要是left包含元素尽可能少
    for(let i=A.length-1;i>-1;i--){
        if(A[i]<leftMax){
            rightIndex = i;
            break;
        }
    }
    
    while(true){
        let maxChange = false;
        // 看看有没有更大的
        for(let i=leftIndex+1;i<rightIndex;i++){
            if(A[i]>leftMax){
                leftMax = A[i];
                maxChange = true;
            }
        }
        if(maxChange){
            // 有更大的，看看是否拓宽了右边界
            let newRightIndex;
            for(let i=A.length-1;i>leftIndex;i--){
                if(A[i]<leftMax){
                    newRightIndex = i;
                    break;
                }
            }
            // 拓宽了右边界，需要看在拓宽区是否有更大的(再次执行循环)
            if(newRightIndex !== undefined){
                leftIndex = rightIndex;
                rightIndex = newRightIndex;
            }else{
                return rightIndex+1;
            }
        }else{
            return rightIndex+1;
        }
        
        
    }
};